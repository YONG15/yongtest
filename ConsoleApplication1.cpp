#include<iostream>
using namespace std;

int arr[2][6] = { 4,5,6,1,3,1,2,1,3,6,3,6 };

void input(int* a, int* b, int* c) {
	cin >> *a >> *b >> *c;
}
void Process(int a, int b, int c, int* d, int* e, int* f) {
	for (int i = 0; i < 2; i++) {
		for (int j = 0; j < 6; j++) {
			if (arr[i][j] == a) {
				*d = *d+1;
			}
			if (arr[i][j] == b) {
				*e = *e + 1;
			}
			if (arr[i][j] == c) {
				*f = *f + 1;
			}
		}
	}
}
void Output(int a, int b, int c, int d, int e, int f) {
	cout << a << '=' << d << "개\n";
	cout << b << '=' << e << "개\n";
	cout << c << '=' << f << "개\n";
}
int main()
{
	int a, b, c;
	input(&a, &b, &c);
	int d = 0, e = 0, f = 0;
	Process(a, b, c, &d, &e, &f);
	Output(a, b, c, d, e, f);

	return 0;
}