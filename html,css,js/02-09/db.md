-- SELECT 필드명 FROM TABLE 
SELECT * FROM minco.honey;
SELECT name,age FROM minco.honey;

-- 조건 SELECT 필드명 FROM TABLE WHERE
SELECT * FROM minco.honey WHERE num >= 2 AND num <= 4;
-- ==,===이 아니라 =을 쓴다. 
SELECT * FROM minco.honey WHERE age = 30;

SELECT 123+45;
SELECT 123+"문자열";
-- 문자열 사칙연산시 문자열을 0으로 인식 
SELECT * FROM minco.honey WHERE num=2 OR num =5;
SELECT name,age FROM minco.honey WHERE num>=2 AND num <=5;
SELECT * FROM minco.honey WHERE age>=20 AND age <30;
SELECT * FROM minco.honey WHERE num%2=0 AND age%2 =1;

-- 필드 이름 바꾸기
SELECT name '이름' FROM minco.honey;
SELECT name AS '이름' FROM minco.honey;

-- 정렬(기본값은 오름차순)
SELECT * FROM minco.honey ORDER BY age; -- 오름차순 
SELECT * FROM minco.honey ORDER BY age DESC; -- 내림차순
SELECT * FROM minco.honey ORDER BY age,name; -- age먼저 정렬 -> 같으면 name정렬 

-- limit 개수제한
-- 페이지 나타낼때 사용(10개 제한후 10개 단위로 페이지 나누기)
-- LIMIT 건너뛸 갯수, 가져올 개수
SELECT * FROM minco.honey LIMIT 3,3