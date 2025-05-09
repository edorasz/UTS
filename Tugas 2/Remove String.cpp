#include <iostream>
#include <string>
using namespace std;

string removeFirstOccurrence(string str, string search) {
    size_t pos = str.find(search);
    if (pos != string::npos)
        str.erase(pos, search.length());
    return str;
}

int main() {
    string str = "Hello world";
    string search = "ell";
    cout << "Hasil: " << removeFirstOccurrence(str, search) << endl;
    return 0;
}
