#include<iostream>
using namespace std;
/*
abcccbdeeab <- 길이 : 11
a의 개수 : 2 <- 11번
b의 개수 : 3 <- 11번
c의 개수 : 3 <- 11번
d의 개수 : 1 <- 11번
e의 개수 : 2 <- 11번

하고 싶은 것 : '문자' -> 해당 문자가 몇개?

DAT : Direct Access Table
 -> 배열의 index에 의미를 부여
int DAT[];
// index : 문자,
   value : 해당 문자가 몇 개?
*/




int main() {
    // DAT
    //char temp[100];
    //cin >> temp;

    //int DAT[256] = {0,}; // 기본적인 문자(Ascii code) : 128가지, char라는 data가 표현 가능한 종류 : 256가지
    //// index : 문자
    //// value : 해당 문자가 몇 개 ?
    //for (int i = 0; temp[i]; i++) // <- 11번
    //{
    //    char now = temp[i];
    //    DAT[now]++; // now라는 문자가 1개 추가
    //}


    // 방향 배열
    int M[3][5] = { 0, };
    int row, col;
    cin >> row >> col;
        //  0      1

    //M[row + -1][col + 0] = 1;//상
    //M[row + 1][col + 0] = 1;//하
    //M[row + 0][col + -1] = 1;//좌
    //M[row + 0][col + 1] = 1;//우

            //   상 하 좌 우
    int dr[4] = {-1, 1, 0, 0}; // row쪽에 더해질 값
    int dc[4] = { 0, 0,-1, 1}; // col쪽에 더해질 값

    for (int i = 0; i < 4; i++)
    {
        int nr = row + dr[i]; // row에서 i번째 방향
        int nc = col + dc[i]; // col에서 i번째 방향
        //M[row + ? ][col + ? ] = 1

        //원하는 범위 바깥의 좌표가 계산되면 무시
        if (0 > nr || 0 > nc || nr >= 3 || nc >= 5) continue; 
        
        M[nr][nc] = 1;
    }

    for (int i = 0; i < 3; i++)
    {
        for (int j = 0; j < 5; j++)
            cout << M[i][j];
        cout << "\n";
    }


    return 0;    
}