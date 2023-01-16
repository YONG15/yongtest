#include<iostream>
using namespace std;


int main()
{
	int a, b, arr[6][3], n=10;
	cin >> a >> b;
	
	for (int i = 0; i < 6; i++) {
		for (int j = 0; j < 3; j++) {
			arr[j][i] = n;
			n++;
			if (i >= a && i <= b) {
				arr[j][i] = 7;
			}
		}
	}
	for (int i = 0; i < 6; i++) {
		for (int j = 0; j < 3; j++) {
			cout << arr[i][j] << ' ';
		}
		cout << endl;
	}



	return 0;
}