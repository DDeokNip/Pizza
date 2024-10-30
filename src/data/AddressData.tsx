interface AddressData {
    si: string[]
    [key: string]: string[] | { [key: string]: string[] }
}

const addressData: AddressData = {
    si: [
        "서울",
        "경기",
        "인천",
        "강원",
        "충북",
        "충남",
        "대구",
        "부산",
        "대전",
        "광주",
        "울산",
        "경상",
        "경남",
        "전남",
        "전북",
        "제주"
    ],
    서울: {
        종로구: ["종로1가", "종로2가", "종로3가", "종로4가", "종로5가"],
        중구: ["황학동", "신당동", "을지로", "남산동", "광희동"],
        용산구: ["이촌동", "후암동", "효창동", "용산동", "삼각지"],
        성동구: ["성수동", "행당동", "도선동", "금호동", "옥수동"],
        광진구: ["구의동", "자양동", "광장동", "중곡동", "군자동"],
        동대문구: ["신설동", "회기동", "휘경동", "청량리동", "전농동"],
        중랑구: ["면목동", "상봉동", "신내동", "중화동", "묵동"],
        성북구: ["안암동", "월곡동", "정릉동", "돈암동", "석관동"],
        강북구: ["미아동", "번동", "수유동", "우이동", "삼각산"],
        도봉구: ["창동", "방학동", "도봉동", "도봉산", "쌍문동"],
        노원구: ["상계동", "하계동", "중계동", "공릉동", "태릉"],
        은평구: ["신사동", "증산동", "역촌동", "불광동", "갈현동"],
        서대문구: ["홍제동", "남가좌동", "북가좌동", "신촌동", "대현동"],
        마포구: ["합정동", "상수동", "서교동", "중동", "망원동"],
        양천구: ["신정동", "목동", "오목교", "양천로", "신월동"],
        강서구: ["화곡동", "방화동", "등촌동", "염창동", "내발산동"],
        구로구: ["구로동", "고척동", "천왕동", "개봉동", "온수동"],
        금천구: ["가산동", "독산동", "시흥동", "일원동", "범안동"],
        영등포구: ["영등포동", "여의도동", "당산동", "문래동", "신길동"],
        동작구: ["흑석동", "사당동", "노량진동", "대방동", "본동"],
        관악구: ["신림동", "봉천동", "행운동", "낙성대동", "난곡동"],
        서초구: ["방배동", "서초동", "잠원동", "원지동", "내곡동"],
        강남구: ["논현동", "역삼동", "삼성동", "청담동", "신사동"],
        송파구: ["잠실동", "신천동", "가락동", "송파동", "문정동"],
        강동구: ["강일동", "상일동", "명일동", "천호동", "암사동"]
    },
    경기: {
        수원시: ["장안구", "권선구", "팔달구", "영통구"],
        성남시: ["수정구", "중원구", "분당구"],
        고양시: ["덕양구", "일산동구", "일산서구"],
        용인시: ["처인구", "기흥구", "수지구"],
        화성시: ["남양읍", "향남읍", "봉담읍"],
        부천시: ["오정구", "원미구", "소사구"],
        안산시: ["단원구", "상록구"],
        안양시: ["동안구", "만안구"],
        남양주시: ["평내동", "호평동", "오남읍"],
        평택시: ["평택동", "안중읍", "신장동"],
        시흥시: ["정왕동", "계수동", "능곡동"],
        오산시: ["중리동", "세교동", "원동"],
        김포시: ["김포본동", "고촌읍", "사우동"],
        이천시: ["창전동", "관고동", "증포동"],
        구리시: ["인창동", "사노동", "갈매동"],
        양주시: ["남면", "양주동", "회천동"],
        의정부시: ["의정부동", "신곡동", "가능동"],
        포천시: ["신북면", "소흘읍", "포천동"],
        동두천시: ["상패동", "지행동", "송내동"],
        여주시: ["여주동", "대신면", "흥천동"],
        광명시: ["광명동", "하안동", "철산동"],
        광주시: ["광주동", "오포읍", "곤지암읍"],
        안성시: ["안성동", "공도읍", "죽산면"],
        하남시: ["신장동", "덕풍동", "미사동"]
    },
    인천: {
        중구: ["북성동", "신포동", "영종동"],
        동구: ["송림동", "화수동", "금창동"],
        미추홀구: ["주안동", "도화동", "연수동"],
        연수구: ["선학동", "청학동", "송도동"],
        남동구: ["구월동", "간석동", "논현동"],
        부평구: ["부평동", "갈산동", "일신동"],
        계양구: ["계양동", "작전동", "이화동"],
        서구: ["검단동", "오류동", "원당동"],
        옹진군: ["덕적면", "영흥면", "장봉면"]
    },
    강원: {
        춘천시: ["강원대", "퇴계원", "남산면"],
        원주시: ["원동", "무실동", "반곡동"],
        강릉시: ["교동", "옥계면", "성덕동"],
        동해시: ["동해동", "부곡동", "천곡동"],
        태백시: ["황지동", "상장동", "장성동"],
        속초시: ["청초동", "조양동", "속초동"],
        삼척시: ["정라동", "가곡면", "도계읍"],
        홍천군: ["홍천읍", "화촌리", "내촌면"],
        횡성군: ["횡성읍", "서원면", "둔내면"],
        영월군: ["영월읍", "상동면", "한반도면"],
        평창군: ["평창읍", "용평리", "대화면"],
        정선군: ["정선읍", "고한읍", "사북읍"],
        철원군: ["철원읍", "갈말읍", "동송읍"],
        화천군: ["화천읍", "사내면", "하리면"],
        양구군: ["양구읍", "남면", "해안면"],
        인제군: ["인제읍", "북면", "상하차면"],
        고성군: ["고성읍", "토성면", "간성읍"],
        양양군: ["양양읍", "손양면", "현북면"]
    },
    충북: {
        청주시: ["상당구", "서원구", "흥덕구", "청원구"],
        충주시: ["충주동", "호암동", "연수동"],
        제천시: ["청풍면", "제천동", "고수동"],
        단양군: ["단양읍", "가곡면", "영춘면"],
        보은군: ["보은읍", "수한면", "회남면"],
        옥천군: ["옥천읍", "이원면", "청산면"],
        영동군: ["영동읍", "매곡면", "각리면"],
        증평군: ["증평읍", "사직면", "도안면"],
        진천군: ["진천읍", "문백면", "덕산면"],
        괴산군: ["괴산읍", "장연면", "불정면"]
    },
    충남: {
        천안시: ["동남구", "서북구"],
        공주시: ["공주읍", "신관동", "웅진동"],
        보령시: ["보령동", "명천동", "웅천읍"],
        아산시: ["탕정면", "배방읍", "신창면"],
        서산시: ["서산동", "석림동", "예천동"],
        논산시: ["논산동", "강경읍", "부적면"],
        계룡시: ["계룡동", "신도안면"],
        당진시: ["당진읍", "면천면", "합덕읍"],
        홍성군: ["홍성읍", "장곡면", "내포면"],
        예산군: ["예산읍", "신암면", "대술면"],
        서천군: ["서천읍", "마서면", "문산면"],
        청양군: ["청양읍", "정산면", "대치면"],
        고령군: ["고령읍", "성산면", "대가야읍"],
        부여군: ["부여읍", "규암면", "홍산면"],
        금산군: ["금산읍", "추부면", "진산면"]
    },
    대구: {
        중구: ["동인동", "삼덕동", "서문시장"],
        동구: ["신암동", "안심동", "효목동"],
        서구: ["평리동", "비산동", "내당동"],
        남구: ["이천동", "대명동", "대명9동"],
        북구: ["산격동", "침산동", "대현동"],
        수성구: ["범어동", "수성동", "상동"],
        달서구: ["대곡동", "본동", "두류동"],
        달성군: ["유가면", "화원읍", "논공읍"]
    },
    부산: {
        중구: ["중앙동", "광복동", "동광동"],
        서구: ["아미동", "부민동", "동대신동"],
        동구: ["초량동", "범일동", "수산동"],
        영도구: ["청학동", "신선동", "대교동"],
        부산진구: ["부전동", "전포동", "양정동"],
        동래구: ["온천동", "낙민동", "명륜동"],
        남구: ["대연동", "용호동", "수영동"],
        해운대구: ["우동", "좌동", "송정동"],
        사하구: ["하단동", "신평동", "장림동"],
        금정구: ["금성동", "남산동", "부곡동"],
        강서구: ["지사동", "대저동", "화전동"],
        연제구: ["연산동", "거제동", "연산9동"],
        수영구: ["광안동", "남천동", "해운대구"],
        사상구: ["모라동", "주례동", "감전동"],
        기장군: ["기장읍", "장안읍", "일광면"]
    },
    대전: {
        동구: ["가오동", "정동", "대동"],
        중구: ["문화동", "대흥동", "선화동"],
        서구: ["둔산동", "가장동", "갈마동"],
        유성구: ["전민동", "궁동", "신성동"],
        대덕구: ["오정동", "송촌동", "중리동"]
    },
    광주: {
        동구: ["지산동", "광산동", "계림동"],
        서구: ["농성동", "치평동", "광천동"],
        남구: ["봉선동", "주월동", "임암동"],
        북구: ["운암동", "양산동", "각화동"],
        광산구: ["우산동", "송정동", "신촌동"]
    },
    울산: {
        중구: ["학성동", "옥교동", "성남동"],
        남구: ["삼산동", "대안동", "달동"],
        동구: ["전하동", "일산동", "방어동"],
        북구: ["강동", "명촌동", "진장동"],
        울주군: ["울주읍", "언양읍", "온양면"]
    },
    경상: {
        포항시: ["북구", "남구", "송도동"],
        경주시: ["황남동", "안강읍", "보덕동"],
        김천시: ["평화동", "어모면", "율곡동"],
        안동시: ["중앙동", "옥동", "임하면"],
        영주시: ["영주동", "부석면", "상망동"],
        상주시: ["상주동", "모동", "중동"],
        문경시: ["문경읍", "산양면", "동성동"],
        예천군: ["예천읍", "감천면", "명호면"],
        봉화군: ["봉화읍", "재산면", "물야면"],
        울진군: ["울진읍", "북면", "남면"],
        영양군: ["영양읍", "입암면", "평해면"],
        청송군: ["청송읍", "파천면", "진보면"],
        고령군: ["고령읍", "성산면", "대가야읍"],
        성주군: ["성주읍", "용암면", "수륜면"],
        칠곡군: ["왜관읍", "북삼읍", "동명면"],
        김해시: ["김해동", "장유면", "내외동"]
    },
    경남: {
        창원시: ["의창구", "성산구", "마산합포구", "마산회원구"],
        진주시: ["진주동", "금산면", "대안동"],
        통영시: ["통영동", "산양읍", "도남동"],
        사천시: ["사천읍", "신서동", "축동"],
        김해시: ["김해동", "장유면", "내외동"],
        밀양시: ["밀양동", "부북면", "삼랑진면"],
        거창군: ["거창읍", "가조면", "마리면"],
        합천군: ["합천읍", "대병면", "의령면"],
        의령군: ["의령읍", "가례면", "유곡면"],
        창녕군: ["창녕읍", "대지면", "고암면"],
        양산시: ["양산동", "소주동", "평산동"],
        하동군: ["하동읍", "악양면", "고전면"],
        산청군: ["산청읍", "생초면", "신안면"],
        남해군: ["남해읍", "고현면", "상주면"],
        함양군: ["함양읍", "휴천면", "유림면"]
    },
    전북: {
        전주시: ["완산구", "덕진구"],
        군산시: ["나운동", "중앙동", "미룡동"],
        익산시: ["익산동", "신동", "망성동"],
        정읍시: ["정우면", "감곡면", "태인면"],
        남원시: ["남원동", "주생면", "수지면"],
        김제시: ["김제동", "신풍동", "백구면"],
        완주군: ["용진면", "봉동읍", "고산면"],
        진안군: ["진안읍", "성수면", "안천면"],
        무주군: ["무주읍", "적상면", "설천면"],
        장수군: ["장수읍", "계북면", "계남면"],
        임실군: ["임실읍", "신평면", "강진면"],
        순창군: ["순창읍", "팔덕면", "유등면"],
        고창군: ["고창읍", "신림면", "부안면"],
        부안군: ["부안읍", "진서면", "동진면"]
    },
    전남: {
        목포시: ["죽교동", "상동", "신흥동"],
        여수시: ["여서동", "소라면", "광무동"],
        순천시: ["순천동", "조례동", "서면"],
        광양시: ["광양동", "중동", "옥룡동"],
        담양군: ["담양읍", "대전면", "금성면"],
        곡성군: ["곡성읍", "겸면", "목사동"],
        구례군: ["구례읍", "마산면", "토지면"],
        해남군: ["해남읍", "삼산면", "문내면"],
        영암군: ["영암읍", "금정면", "미암면"],
        강진군: ["강진읍", "병영면", "마량면"],
        완도군: ["완도읍", "노화읍", "금당면"],
        진도군: ["진도읍", "고군면", "장산면"],
        신안군: ["신안읍", "자은면", "흑산면"]
    },
    제주: {
        제주시: [
            "일도1동",
            "일도2동",
            "이도1동",
            "이도2동",
            "삼도1동",
            "삼도2동",
            "용담1동",
            "용담2동",
            "오라동",
            "연동",
            "노형동",
            "봉개동",
            "동홍동",
            "회천동"
        ],
        서귀포시: ["서귀포시", "중문동", "대포동", "강정동", "하원동", "남원읍", "표선면", "성산읍", "안덕면", "추자면"]
    }
}
export default addressData
