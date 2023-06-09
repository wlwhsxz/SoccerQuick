import react, { useState } from 'react';
import styled from 'styled-components';
import checkIcon from '../../../styles/icon/check.svg';

function MyFavoriteGroundList() {
  const [filteredData, setFilteredData] = useState(dummydata_filteredGround);
  return (
    <>
      {' '}
      <Searchpage>
        <SearchPageBody>
          <table>
            <thead>
              <StyledLabelTr>
                <th></th>
                <th>지역</th>
                <th>경기장</th>
                <th>상세조회</th>
              </StyledLabelTr>
            </thead>
            <tbody>
              {filteredData.map((item, idx) => (
                <StyledTr key={item.title + idx}>
                  <StyledCheckboxTd>
                    <label htmlFor={item.title}></label>
                  </StyledCheckboxTd>
                  <StyledAddressTd>{item.address.shortAddress}</StyledAddressTd>
                  <StyledMainTd>
                    <p>{item.title}</p>
                    <StyledTableCell>
                      {item.provided.map((data, index) => (
                        <StyledTable key={index} data={data}>
                          {data}
                        </StyledTable>
                      ))}
                    </StyledTableCell>
                  </StyledMainTd>

                  <td>
                    <StyledButton onClick={() => {}}>조회</StyledButton>
                  </td>
                </StyledTr>
              ))}
            </tbody>
          </table>
        </SearchPageBody>
      </Searchpage>
    </>
  );
}

export default MyFavoriteGroundList;

const getColorBydata = (data: string) => {
  if (data === '풋살화 대여') {
    return '#531dab';
  } else if (data === '남녀 구분 화장실') {
    return '#096dd9';
  } else if (data === '공 대여') {
    return '#d4380d';
  } else if (data === '조끼 대여') {
    return '#08979c';
  } else if (data === '무료 주차') {
    return '#c41d7f';
  } else if (data === '샤워실') {
    return '#d46b08';
  }
};

const getBackgroundColorBydata = (data: string) => {
  if (data === '풋살화 대여') {
    return '#f9f0ff';
  } else if (data === '남녀 구분 화장실') {
    return '#e6f7ff';
  } else if (data === '공 대여') {
    return '#fff2e8';
  } else if (data === '조끼 대여') {
    return '#e6fffb';
  } else if (data === '무료 주차') {
    return '#fff0f6';
  } else if (data === '샤워실') {
    return '#fff7e6';
  }
};

const Searchpage = styled.div`
  display: flex;
  font-size: 1.7rem;
  width: 98.4rem;
  margin-top: 2rem;
`;

const SearchPageBody = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  table {
    width: 100%;
  }
  tr {
    justify-content: space-between;
    align-items: center;
  }
  td {
    justify-content: center;
    align-items: center;
  }
`;

const StyledLabelTr = styled.tr`
  height: 6rem;
  padding-bottom: 1rem;
  /* border-bottom: 1px solid #d5d5d5ae; */
  background-color: #fafafa;
  border-bottom: 1px solid #d5d5d5ae;
  box-shadow: 0px 5px 5px -5px #cbc9c9d5;
  th {
    font-size: 1.8rem;
    font-weight: 500;
    :last-child {
      padding-right: 4rem;
    }
    :nth-child(2) {
      text-align: start;
      padding-left: 4.5rem;
    }
    :nth-child(3) {
      padding-right: 5rem;
    }
  }
`;

const StyledTableCell = styled.div`
  display: inline-block;
  height: 2rem;
  padding: 0;
  margin: 1.2rem 1rem 0rem 0;
  border-radius: 0.4rem;
  font-size: 1.5rem;
  font-weight: 400;
  color: #888888;
  line-height: 2rem;
`;

const StyledTable = styled.div<{ data: string }>`
  display: inline;
  height: 4rem;
  padding: 0.2rem 1rem 0.3rem 1rem;
  margin-right: 1.2rem;
  border: 0.1rem solid #eeeeee;
  border-radius: 2rem;
  font-size: 1rem;
  font-weight: 400;
  color: ${({ data }) => getColorBydata(data)};
  background-color: ${({ data }) => getBackgroundColorBydata(data)};
`;

const StyledTr = styled.tr`
  height: 10rem;
  margin: 1rem 1rem;
  padding: 2rem 1rem;
  font-size: 1.6rem;
  border-bottom: 0.1rem solid #dddddd;
`;

const StyledCheckboxTd = styled.td`
  padding-left: 3rem;
  input {
    display: none;

    + label {
      display: inline-block;
      width: 2rem;
      height: 2rem;
      border: 0.15rem solid var(--color--darkgreen);
      border-radius: 0.5rem;
      cursor: pointer;
    }
    :checked + label {
      background-image: url(${checkIcon});
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
    }
  }
`;

const StyledAddressTd = styled.td`
  font-size: 1.6rem;
  font-weight: 500;
  text-align: center;
  padding-left: 1rem;
`;

const StyledMainTd = styled.td`
  padding-left: 10rem;
  p {
    font-size: 1.9rem;
  }
`;

const StyledButton = styled.button`
  width: 10rem;
  height: 3.8rem;
  border-radius: 0.7rem;
  background-color: var(--color--green);
  color: white;
  font-size: 1.4rem;
  font-weight: 500;
`;

const dummydata_filteredGround = [
  {
    title: '고양 싸커스토리 축구클럽 운정점',
    image: [
      'https://plab-football.s3.amazonaws.com/media/gy_storywj_out_half.jpg',
      'https://plab-football.s3.amazonaws.com/media/gy_storywj_out_goal.jpg',
      'https://plab-football.s3.amazonaws.com/media/gy_storywj_out_corner.jpg',
    ],
    address: {
      shortAddress: '경기 / 고양시',
      fullAddress: '경기도 고양시 일산서구 덕이로 310-2',
    },
    stadiums: [
      {
        usage: '다목적 구장',
        facility: '90x50m •실외 •인조잔디',
        image: [
          'https://plab-football.s3.amazonaws.com/media/KakaoTalk_Photo_2023-01-30-16-09-56_001.jpeg',
          'https://plab-football.s3.amazonaws.com/media/KakaoTalk_Photo_2023-01-30-16-09-56_003.jpeg',
        ],
      },
      {
        usage: '축구장',
        facility: '100x64m •실외 •인조잔디',
        image: [
          'https://plab-football.s3.amazonaws.com/media/KakaoTalk_Photo_2023-01-30-16-09-16_001.jpeg',
          'https://plab-football.s3.amazonaws.com/media/KakaoTalk_Photo_2023-01-30-16-09-16_002.jpeg',
        ],
      },
      {
        usage: '풋살장 (다목적 구장)',
        facility: '20x40m •실외 •인조잔디',
        image: [
          'https://plab-football.s3.amazonaws.com/media/%EA%B3%A4%EC%A7%80%EC%95%94_%ED%8C%80%EC%97%85%EC%BA%A0%ED%8D%BC%EC%8A%A4_%ED%92%8B%EC%82%B4%EC%9E%A5.jpg',
          'https://plab-football.s3.amazonaws.com/media/%EA%B3%A4%EC%A7%80%EC%95%94_%ED%8C%80%EC%97%85%EC%BA%A0%ED%8D%BC%EC%8A%A4_%ED%92%8B%EC%82%B4%EC%9E%A53.jpg',
          'https://plab-football.s3.amazonaws.com/media/%EA%B3%A4%EC%A7%80%EC%95%94_%ED%8C%80%EC%97%85%EC%BA%A0%ED%8D%BC%EC%8A%A4_%ED%92%8B%EC%82%B4%EC%9E%A52.jpg',
        ],
      },
    ],

    provided: ['풋살화 대여', '남녀 구분 화장실', '공 대여', '조끼 대여'],
    nonProvided: ['무료 주차', '샤워실'],
    reservation: {
      일반: [
        '7일 전 취소 시 100% 환불',
        '5일 전 취소 시 80% 환불',
        '3일 전 취소 시 50% 환불',
        '2일 전 ~ 예약 당일 환불 불가',
        '캐시는 규정에 따라 자동 환급되며 잔액 환불 희망 시 나의 충전 내역에서 신청바랍니다',
      ],
      천재지변: [
        '당일 천재지변으로 인해 구장 이용이 불가한 경우 100% 환불',
        '적용기준: 호우경보, 대설경보, 태풍주의보, 태풍경보',
      ],
      '우천시 변경 기준': [
        '시간 당 5mm 이상 시 날짜 변경 가능',
        '기준: 당일 이용 2시간 전 기상청 날씨누리 해당 주소지 기준',
        '단순 변심에 의한 날짜 변경은 불가',
      ],
    },
    url: 'https://www.plabfootball.com/stadium/3415/info/',
    source: '(주)플랩',
  },
];