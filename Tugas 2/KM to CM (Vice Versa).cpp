#include <iostream>
using namespace std;

double cmToKm(double cm) {
    return cm / 100000.0;
}

double kmToCm(double km) {
    return km * 100000.0;
}

int main() {
    double value;
    char choice;
    cout << "Masukkan 'c' untuk cm ke km atau 'k' untuk km ke cm: ";
    cin >> choice;
    cout << "Masukkan nilai: ";
    cin >> value;

    if (choice == 'c')
        cout << value << " cm = " << cmToKm(value) << " km" << endl;
    else if (choice == 'k')
        cout << value << " km = " << kmToCm(value) << " cm" << endl;
    else
        cout << "Pilihan tidak valid!" << endl;

    return 0;
}
