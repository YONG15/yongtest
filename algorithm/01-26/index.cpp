#include<iostream>
#include<cstring>
#define _CRT_SECURE_NO_WARNINGS
using namespace std;

int path[3];
int cnt;
void run(int lev) {
	if (lev == 3) {
		if ((path[0] * path[1] * path[2]) % 2 == 0){
			cnt++;
		}
		cout << path[0] << path[1] << path[2] << endl;
		return;
	}
	for (int i = 2; i <= 4; i++) {
		path[lev] = i;
		run(lev + 1);
		path[lev] = 0;
	}
}

int main() {
	
	run(0);
	cout << cnt;

	return 0;
}