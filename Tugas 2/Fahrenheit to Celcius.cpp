#include <iostream>
using namespace std;

double fahrenheitToCelsius(double fahrenheit) {
    return (fahrenheit - 32) * 5.0 / 9.0;
}

int main() {
    double fahrenheit;
    cout << "Masukkan suhu dalam Fahrenheit: ";
    cin >> fahrenheit;
    cout << "Suhu dalam Celsius: " << fahrenheitToCelsius(fahrenheit) << endl;
    return 0;
}