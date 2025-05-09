#include <iostream>
using namespace std;

bool isEven(int n) {
    return n % 2 == 0;
}

int main() {
    int n;
    cout << "Masukkan angka: ";
    cin >> n;
    cout << "isEven: " << (isEven(n) ? "true" : "false") << endl;
    return 0;
}
