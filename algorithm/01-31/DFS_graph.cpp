2023-01-31 오늘의 DFS 수업 코드 올려드립니다.

#include <iostream>
#include <vector>
using namespace std;

/*
5 4 <- node개수, edge개수
1 2 <- edge정보(from to)
1 3 <- edge정보(from to)
1 4 <- edge정보(from to)
2 5 <- edge정보(from to)
*/

int nodeCnt, edgeCnt;
int adj[6][6] = { 0, }; // adj[from][to] = 갈 수 있는가?

void dfs인접행렬(int now) {
    // 지금 now라는 점에 도착했다!

    // 2. 기저조건(option)
    for (int to = 1; to <= nodeCnt; to++)
    {
        // 재귀에서 다룰 때, ?기능적으로 비슷한 부분?
        // 가지치기(가능한지 판별)
        if (adj[now][to] == 0) continue; // now->to로 갈 수 없으면 무시

        cout << now << "에서" << to << "로 갑니다!\n";
        // 1. 재귀 기본 구조
        dfs인접행렬(to);
    }
}


vector<int> v[8]; // v[from] : from에서 갈 수 있는 to'들'을 저장한 vector
// 갔던 점인지 판별
int used[8]; // used, visited
// used[node번호] = 해당 node를 들렸었는가?

vector<int> path; // 지금 들리고 있는 node들의 경로

void dfs인접리스트(int now) {
    // 2. 기저조건(option)
    if (now == 7) {
        for (int i = 0; i < path.size(); i++)
            cout << path[i] << " ";
        cout << "\n";
        return;
    }

    for (int i = 0; i < v[now].size() ; i++) {
        // now->to찾기
        int to = v[now][i];
        // 4. 가지치기(판별)
        if (used[to] == 1) continue; // 갔던 점이면 무시

        // 3. 기록 및 처리
        cout << now << "에서" << to << "로 갑니다!\n";
        used[to] = 1; // 내가 to라는 점으로 간다라고 기록
        path.push_back(to);

        // 1. 재귀 기본 구조
        dfs인접리스트(to);

        // 3. 복구
        path.pop_back(); // vector.pop_back() : vector의 맨 뒤 data를 메모리까지 '삭제'
        used[to] = 0;
        // used를 다시 복구 : 실제 경로랑 완벽하게 일치
        // used를 다시 복구X: 단순하게 모든 점들을 정확히 1번씩만 들려볼 때
    }
}


int main() {
    //cin >> nodeCnt >> edgeCnt;
    //// 1. 인접 행렬
    //for (int i = 0; i < edgeCnt; i++)
    //{
    //    int from, to;
    //    cin >> from >> to;
    //    adj[from][to] = 1;
    //}

    // 특정 from에서 갈 수 있는 모든 to찾기
    //int node = 1; // 특정 from으로 둘 점
    //for (int to = 1; to <= 5; to++)
    //{
    //    if (adj[node][to] == 0) continue;
    //    // 갈 수 있는 점이다.
    //    cout << to <<" ";
    //}
    //dfs인접행렬(1);



    int nodeCnt, edgeCnt;
    cin >> nodeCnt >> edgeCnt;
    // 2. 인접 리스트
    // vector<저장할 data형태> v;

    for (int i = 0; i < edgeCnt; i++)
    {
        int from, to;
        cin >> from >> to;
        v[from].push_back(to); 
        // vector.push_back(value) : vector의 맨 뒤에 공간을 추가해서 value라는 값을 저장
    }

    //// 특정 from에서 갈 수 있는 모든 to찾기
    //int node = 1;
    //for (int i = 0; i < v[node].size(); i++)
    //    //vector.size() : vector가 갖고있는 data 개수
    //{
    //    int to = v[node][i];
    //    cout << to << " ";
    //}

    path.push_back(1);
    used[1] = 1; // 1번이라는 점을 간다라고 기록
    dfs인접리스트(1); // 1번 점으로 감


}
#include <iostream>

using namespace std;

// 문제. 
// 0번 노드에서 2번 노드로 가는데 다양한 길이 있다.
// 그 다양한 길들은 각각의 통행료가 (=가중치)있는데
// 0번에서 2번 노드로 가는데에 발생할 수 있는 통행료의 합들을 출력하라.

// 추가적으로 해보면 좋은 것
// 1단계 : 그래프 가중치값들을 바꿔보기
// 2단계 : 최종적으로 MAX 값 , MIN 값만을 출력하는 형태로 만들어보기
// 3단계 : 노드 개수, 간선 개수, 가중치 값
//         시작지점, 도착지점 등을 직접 입력 받는 형태로 만들어보기


int sum = 0; // 총합
int visited[4] = { 0, }; // 방문배열
int map[4][4] =
{
	0,7,20,8,
	0,0,5,0,
	15,0,0,0,
	0,0,6,0
}; // 인접행렬 map[노드개수][노드개수] , 하드코딩

void dfs(int now, int sum)
{

	if (now == 2) // 2번 노드에 도착했다면 
	{
		cout << sum << endl; // 2번 노드로 오면서의 총합 출력
		return;
	}


	for (int i = 0; i < 4; i++)
	{
		if (map[now][i] == 0) continue; // 간선이 없다면 컨티뉴
		if (visited[i] == 1) continue; // 이미 방문한 적이 있다면 컨티뉴
		visited[i] = 1; // 방문하게 될 노드에 1 체크(이게 없다면 무한 사이클에 빠질 수 있습니다 !)

		dfs(i, sum + map[now][i]); // (다음 탐방노드, 현재 SUM값에서 가중치값 더하기) 
		                           // ( now = from , i = to , map[now][i] 란 map[from][to] 의 의미)

		visited[i] = 0; // 방문하고 돌아간다면 0 체크(이게 있어야 모든 경우를 해볼 수 있습니다 !)
	}

};

int main()
{
	visited[0] = 1; // 시작노드는 방문배열에 1을 체크하고 감
	dfs(0, sum); // (시작노드번호, sum값)

	return 0;
}
#include <iostream>
#include <vector>

using namespace std;

// 문제. 
// 0번 노드에서 2번 노드로 가는데 다양한 길이 있다.
// 그 다양한 길들은 각각의 통행료가 (=가중치)있는데
// 0번에서 2번 노드로 가는데에 발생할 수 있는 통행료의 합들을 출력하라.

// 추가적으로 해보면 좋은 것
// 1단계 : 그래프 가중치값들을 바꿔보기
// 2단계 : 최종적으로 MAX 값 , MIN 값만을 출력하는 형태로 만들어보기
// 3단계 : 노드 개수, 간선 개수, 가중치 값
//         시작지점, 도착지점 등을 직접 입력 받는 형태로 만들어보기

int sum = 0; // 총합

int visited[4] = { 0, }; // 방문배열, 노드개수만큼

struct Edge // 구조체
{
	int to; // 가게 될 노드번호
	int price; // 가중치 값
};

vector<Edge> v[4]; // 구조체 이차원벡터 생성(얼마나? 노드 개수만큼) 
                   // 또는 vector<vector<Edge>> v(4); 라고 선언 해주셔도 됩니다.
                   

void dfs(int now, int sum)
{

	if (now == 2) // 2번 노드에 도착했다면 
	{
		cout << sum << endl; // 2번 노드로 오면서의 총합 출력
		return;
	}


	for (int i = 0; i < v[now].size(); i++) // 현재 탐색중인 벡터의 사이즈만큼 탐색
		                                    // 아래 하드코딩으로 초기화 한 것을 예시로 들면
		                                    // v[0] 의 사이즈는 3,  v[1]의 사이즈는 1 ....
	{
		int next = v[now][i].to; // 다음에 갈 노드번호는 현재 탐색중인 v[now][i] 의 to 값인데
		                         // 그것을 next 라는 변수에 받아옴.
	
		if (visited[next] == 1) continue; // 다음 방문 예정인 노드에 이미 방문한 적이 있다면 컨티뉴
		visited[next] = 1; // 그렇지 않다면, 방문 전 1을 체크

		dfs(next, sum + v[now][i].price); // next를 통해서 노드가 넘어갈 것이고
		                                  // sum 값에는 v[now][i]의 price 값을 더해줌.
		
		visited[next] = 0;
	}

};

int main()
{
     	// 인접리스트 하드코딩 초기화

	v[0] = { {1,7} , {2,20} , {3,8} }; // v[from] = { {to, price} , {to,price} , {to,price} };
	                                                 // 예) v[0][0]는 to = 1, price = 7 값을 가지고 있음.
	                                                 // 조사식으로 확인해보세요 !
	v[1] = { {2,5} };
	v[2] = { {0,15} };
	v[3] = { {2,6} };



	visited[0] = 1; // 시작노드인 0을 방문배열에 1을 체크하고 DFS고고
	dfs(0, sum); // (시작노드번호, sum값)
	
	return 0;
}