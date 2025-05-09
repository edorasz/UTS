#include <iostream>
#include <algorithm>
using namespace std;

bool isPalindrome(string str) {
    string reversedStr = str;
    reverse(reversedStr.begin(), reversedStr.end());
    return str == reversedStr;
}

int main() {
    string str;
    cout << "Masukkan string: ";
    cin >> str;
    cout << (isPalindrome(str) ? "Palindrome" : "Bukan Palindrome") << endl;
    return 0;
}
