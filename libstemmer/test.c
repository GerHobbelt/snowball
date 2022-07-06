
#include "libstemmer.h"

#include <stdio.h>
#include <stdlib.h>

/* test code */
void error(const char * err) {
    printf("%s\n", err);
    exit(1);
}

int main(void) {
    const char * stemmed;
    const char * unstemmed;
    struct sb_stemmer * s;
    const char ** list = sb_stemmer_list();
    if (*list == 0) error("TEST FAIL: empty list of stemmers");
    
    s = sb_stemmer_new("e", "UTF_8");
    if (s != 0) error("TEST FAIL: non zero return for unrecognised language");
    s = sb_stemmer_new("english", "UTF_8");
    if (s == 0) error("TEST FAIL: zero return for recognised language");
    sb_stemmer_delete(s);
    s = sb_stemmer_new("en", "UTF_8");
    if (s == 0) error("TEST FAIL: zero return for recognised language");
    unstemmed = "recognised";
    stemmed = sb_stemmer_stem(s, (const sb_symbol *)unstemmed, 10);
    printf("%s -> %s\n", unstemmed, stemmed);
    if (sb_stemmer_length(s) != strlen(stemmed))
        error("TEST FAIL: length not correct");
    unstemmed = "recognized";
    printf("%s -> %s\n", unstemmed, stemmed);
    sb_stemmer_delete(s);
    printf("Success\n");
    return 0;
}
