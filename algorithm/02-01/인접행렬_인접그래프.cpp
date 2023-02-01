// #include <iostream>
// using namespace std;

// int arr[5][5] = {
//     0,0,1,0,1,
//     1,0,0,0,0,
//     0,0,0,1,1,
//     0,0,0,0,1,
//     0,0,0,0,0,
// };
// int age[5] = { 8, 9, 15, 4, 22 };

// int main() {

//     int maxi = 0;
//     int maxIndex = 0;
//     for (int x = 0; x < 5; x++) {
//         int cnt = 0;
//         for (int y = 0; y < 5; y++) {
//             cnt += arr[y][x];
//         }
//         if (maxi < cnt) {
//             maxi = cnt;
//             maxIndex = x;
//         }
//     }
//     cout << age[maxIndex];


//     return 0;
// }
// #include <iostream>
// using namespace std;

// int arr[4][4] = {
//     0,50,60,300,
//     0,0,7,0,
//     30,0,0,10,
//     0,0,0,0,
// };
// int used[4];
// int mini = 21e8;

// void run(int now, int sum) {

//     if (now == 3) {
//         cout << sum << " " ;
//         if (mini > sum) mini = sum;
//         return;
//     }

//     for (int i = 0; i < 4; i++) {
//         if (arr[now][i] == 0) continue;
//         if (used[i] == 1) continue;
//         used[i] = 1;
//         run(i, sum + arr[now][i]);
//         used[i] = 0;
//     }
// }

// int main() {

//     used[0] = 1;
//     run(0, 0);
//     cout << "\n최소 : ";
//     cout << mini;

//     return 0;
// }
// #include <iostream>
// #include <vector>
// using namespace std;

// vector< vector<int> > arr(4);

// int main() {

//     arr[0] = { 1, 2, 3 };
//     arr[1] = { 2 };
//     arr[2] = { 2 };

//     for (int y = 0; y < arr.size(); y++) {
//         for (int x = 0; x < arr[y].size(); x++) {
//             cout << arr[y][x];
//         }
//         cout << endl;
//     }
//     return 0;
// }
#include<iostream>
#include<string>
#include<vector>
using namespace std;
vector<vector<int>>arr(5);

void run(int now) {
	cout << now;
	for (int i = 0; i < arr[now].size(); i++) {
		int next = arr[now][i];
		run(next);
	}
}


int main()
{
	arr[0] = { 3 };
	arr[1] = { 2,0 };
	arr[3] = { 4,2 };
	arr[4] = { 2 };
	run(0);

	return 0;
}