//#include<iostream>
//#include<cstring>
//#define _CRT_SECURE_NO_WARNINGS
//using namespace std;
//
//
//int g = 1;
//int arr[4][4] = { 3,1,4,2,1,1,-1,1,2,3,1,4,5,1,0,3 };
//void run(int lev, int g) {
//	if (lev == 4) {
//		cout << ' ' << g << endl;
//		return;
//	}
//	for (int i = 0; i < 4; i++) {
//
//		run(1 + lev, g*arr[lev][i]);
//	}
//}
//
//
//int main()
//{
//	run(0,1);
//
//	return 0;
//}
//#include<iostream>
//#include<cstring>
//#define _CRT_SECURE_NO_WARNINGS
//using namespace std;
//
//int path[3];
//char name[10] = "BTSGOOD";
//int v[7];
//void run(int lev) {
//	if (lev == 3) {
//		for (int i = 0; i < 3; i++) {
//			cout << ' ' << name[path[i]];
//		}
//		cout << endl;
//		return;
//	}
//	for (int i = 0; i < 7; i++) {
//		if (v[i] == 1) {
//			continue;
//		}
//		v[i] = 1;
//		path[lev] = i;
//		run(1 + lev);
//		v[i] = 0;
//	}
//}
//
//
//int main()
//{
//	run(0);
//
//	return 0;
//}
//#include<iostream>
//#include<cstring>
//#define _CRT_SECURE_NO_WARNINGS
//using namespace std;
//
//char path[10];
//int used[10];
//void run(int lev) {
//	if (lev == 3) {
//		cout << path << endl;
//		return;
//	}
//	for (int i = 1; i <= 6; i++) {
//		if (used[i] == 1) {
//			continue;
//		}
//		path[lev] = '0'+i;
//		used[i] = 1;
//		run(1 + lev);
//		used[i] = 0;
//		path[lev] = 0;
//	}
//}
//
//
//int main()
//{
//	run(0);
//
//	return 0;
//}
#include<iostream>
#include<cstring>
#define _CRT_SECURE_NO_WARNINGS
using namespace std;

char arr[5] = { 'A','G','K','R','P' };
char path[10];
int used[10];
void run(int lev) {
	if (lev == 4) {
		cout << path << endl;
		return;
	}
	for (int i = 0; i < 5; i++) {
		if (used[i] == 1) {
			continue;
		}
		path[lev] = arr[i];
		used[i] = 1;
		run(1 + lev);
		used[i] = 0;
		path[lev] = 0;
	}
}


int main()
{
	run(0);

	return 0;
}