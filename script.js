// 이미지 파일명 배열 (on 상태만, off는 _ 붙인 걸로 자동 계산)
const cat01Images = [
  '0101', '0102', '0103', '0104', '0105', '0106', '0108', '0109', '0110', '0113', '0115', '0118', '0121'
  // 추가로 넣고 싶은 이미지명 계속 이어서 적으면 됨
];

const cat02Images = ['0201', '0202', '0203', '0204', '0205', '0207', '0209', '0212', '0214', '0215', '0216', '0219', '0220', '0222'];
const cat03Images = ['0301', '0302', '0303', '0304', '0305', '0307', '0309', '0310', '0311', '0313', '0316', '0317', '0319', '0320', '0321', '0324'];
const cat04Images = ['0401', '0402', '0403', '0404', '0405', '0406', '0409', '0411', '0414', '0415', '0417', '0419', '0420'];
const cat05Images = ['0501', '0502', '0503', '0504', '0505', '0507', '0509', '0511', '0512', '0514', '0516', '0517', '0521', '0522'];
const cat06Images = ['0601', '0602', '0603', '0604', '0606', '0608', '0609', '0610', '0612', '0613', '0615', '0616', '0618', '0620', '0622'];
const cat11Images = ['1101', '1102', '1103', '1104', '1107', '1108', '1109', '1111', '1113', '1114', '1116', '1119', '1123'];
const cat12Images = ['1201', '1202', '1203', '1204', '1206', '1208', '1209', '1211', '1212', '1214', '1217', '1219', '1221'];
const cat13Images = ['1301', '1302', '1303', '1305', '1306', '1308', '1310', '1311', '1312', '1313', '1315', '1316', '1321', '1324'];
const cat14Images = ['1401', '1402', '1403', '1404', '1406', '1407', '1411', '1413', '1414', '1415', '1416', '1418', '1421'];
const cat21Images = ['2101', '2102', '2103', '2105', '2106', '2109', '2111', '2112', '2114', '2116', '2119', '2120', '2121', '2122'];
const cat22Images = ['2201', '2202', '2203', '2205', '2206', '2209', '2211', '2212', '2213', '2216', '2218', '2220', '2222', '2223'];
const cat23Images = ['2301', '2302', '2303', '2305', '2306', '2308', '2309', '2311', '2312', '2313', '2321', '2322'];
const cat24Images = ['2401', '2402', '2403', '2405', '2406', '2408', '2410', '2411', '2412', '2417', '2419', '2420', '2422'];
const cat31Images = ['3101', '3102', '3103', '3105', '3107', '3108', '3109', '3111', '3113', '3114', '3119', '3120', '3121'];
const cat32Images = ['3201', '3202', '3204', '3205', '3206', '3209', '3211', '3213', '3214', '3216', '3218', '3219'];
const cat33Images = ['3301', '3302', '3304', '3305', '3307', '3308', '3310', '3311', '3313', '3314', '3319', '3320'];
const cat34Images = ['3401', '3402', '3404', '3405', '3406', '3409', '3410', '3412', '3413', '3416', '3418', '3420'];
const cat41Images = ['4101', '4102', '4103', '4104', '4106', '4108', '4109', '4110', '4112', '4115', '4118', '4119', '4120', '4122'];
const cat42Images = ['4201', '4203', '4204', '4205', '4206', '4208', '4210', '4211', '4212', '4214', '4218', '4220', '4222'];
const cat43Images = ['4301', '4303', '4304', '4305', '4307', '4308', '4310', '4312', '4313', '4314', '4316', '4320', '4321', '4322'];
const cat44Images = ['4401', '4402', '4404', '4405', '4407', '4408', '4410', '4411', '4413', '4415', '4416', '4417', '4419', '4421'];
const cat51Images = ['5101', '5102', '5104', '5105', '5106', '5107', '5109', '5110', '5112', '5114', '5117', '5120', '5121', '5122'];
const cat52Images = ['5201', '5202', '5204', '5205', '5207', '5208', '5209', '5211', '5212', '5214', '5216', '5218', '5219', '5222'];
const cat53Images = ['5301', '5302', '5303', '5304', '5305', '5307', '5309', '5310', '5312', '5314', '5318', '5319', '5321', '5324'];
const cat54Images = ['5401', '5402', '5403', '5404', '5406', '5408', '5409', '5410', '5412', '5415', '5418', '5419', '5421', '5423'];


function createCategoryImages(categoryId, imageNames) {
  const container = document.getElementById(categoryId);
  imageNames.forEach(name => {
    const onSrc = `images/${name}.png`;
    const offSrc = `images/${name}_.png`;

    const img = document.createElement('img');
    img.src = offSrc; // 초기 상태는 off
    img.dataset.on = onSrc;
    img.dataset.off = offSrc;

    img.addEventListener('click', () => {
      const currentSrc = img.getAttribute('src'); 
      img.src = currentSrc.includes('_') ? img.dataset.on : img.dataset.off;
    });

    container.appendChild(img);
  });
}


// 카테고리 생성
createCategoryImages('cat01', cat01Images);
createCategoryImages('cat02', cat02Images);
createCategoryImages('cat03', cat03Images);
createCategoryImages('cat04', cat04Images);
createCategoryImages('cat05', cat05Images);
createCategoryImages('cat06', cat06Images);
createCategoryImages('cat11', cat11Images);
createCategoryImages('cat12', cat12Images);
createCategoryImages('cat13', cat13Images);
createCategoryImages('cat14', cat14Images);
createCategoryImages('cat21', cat21Images);
createCategoryImages('cat22', cat22Images);
createCategoryImages('cat23', cat23Images);
createCategoryImages('cat24', cat24Images);
createCategoryImages('cat31', cat31Images);
createCategoryImages('cat32', cat32Images);
createCategoryImages('cat33', cat33Images);
createCategoryImages('cat34', cat34Images);
createCategoryImages('cat41', cat41Images);
createCategoryImages('cat42', cat42Images);
createCategoryImages('cat43', cat43Images);
createCategoryImages('cat44', cat44Images);
createCategoryImages('cat51', cat51Images);
createCategoryImages('cat52', cat52Images);
createCategoryImages('cat53', cat53Images);
createCategoryImages('cat54', cat54Images);


// 모두 선택 기능
document.getElementById('selectAllButton').addEventListener('click', () => {
  const allImages = document.querySelectorAll('.image-grid img');
  allImages.forEach(img => {
    img.src = img.dataset.on;
  });
});

// --- 전체 초기화 버튼 기능 ---
document.getElementById('resetButton').addEventListener('click', () => {
  const allImages = document.querySelectorAll('.image-grid img');
  allImages.forEach(img => {
    img.src = img.dataset.off;
  });
});


// 캡쳐 기능 (PNG/JPG 선택 가능)
document.getElementById("captureButton").addEventListener("click", function () {
  const format = document.getElementById("formatSelect").value; // select에서 선택한 값 읽기

  html2canvas(document.body, { scale: 1 }).then((canvas) => {
    const link = document.createElement("a");

    if (format === "png") {
      link.download = "cardcheck.png";
      link.href = canvas.toDataURL("image/png");
    } else {
      // JPG 선택 시 품질 0.9로 손실 압축
      link.download = "cardcheck.jpg";
      link.href = canvas.toDataURL("image/jpeg", 0.9);
    }

    link.click();
  });
});













