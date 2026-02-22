
document.querySelectorAll('.tab-button').forEach(button => {
  button.addEventListener('click', () => {
    const targetId = button.dataset.tab;

    document.querySelectorAll('.tab-button').forEach(btn =>
      btn.classList.remove('active')
    );
    button.classList.add('active');

    document.querySelectorAll('.tab-content').forEach(content =>
      content.classList.remove('active')
    );
    const targetContent = document.getElementById(targetId);
    if (targetContent) {
      targetContent.classList.add('active');
    }
  });
});

const cat01Images = ['0101', '0102', '0103', '0104', '0105', '0106', '0107', '0108', '0109', '0110', '0111', '0112', '0113', '0114', '0115', '0116', '0117', '0118', '0119', '0120', '0121', '0122', '0123', '0124', '0125', '0126', '0127'];
const cat02Images = ['0201', '0202', '0203', '0204', '0205', '0206', '0207', '0208', '0209', '0210', '0211', '0212', '0213', '0214', '0215', '0216', '0217', '0218', '0219', '0220', '0221', '0222', '0223', '0224', '0225', '0226'];
const cat03Images = ['0301', '0302', '0303', '0304', '0305', '0306', '0307', '0308', '0309', '0310', '0311', '0312', '0313', '0314', '0315', '0316', '0317', '0318', '0319', '0320', '0321', '0322', '0323', '0324', '0325', '0326'];
const cat04Images = ['0401', '0402', '0403', '0404', '0405', '0406', '0407', '0408', '0409', '0410', '0411', '0412', '0413', '0414', '0415', '0416', '0417', '0418', '0419', '0420', '0421', '0422', '0423', '0424', '0425'];
const cat05Images = ['0501', '0502', '0503', '0504', '0505', '0506', '0507', '0508', '0509', '0510', '0511', '0512', '0513', '0514', '0515', '0516', '0517', '0518', '0519', '0520', '0521', '0522', '0523', '0524', '0525' ];
const cat06Images = ['0601', '0602', '0603', '0604', '0605', '0606', '0607', '0608', '0609', '0610', '0611', '0612', '0613', '0614', '0615', '0616', '0617', '0618', '0619', '0620', '0621', '0622', '0623', '0624', '0625', '0626'];
const cat11Images = ['1101', '1102', '1103', '1104', '1105', '1106', '1107', '1108', '1109', '1110', '1111', '1112', '1113', '1114', '1115', '1116', '1117', '1118', '1119', '1120', '1121', '1122', '1123', '1124', '1125'];
const cat12Images = ['1201', '1202', '1203', '1204', '1205', '1206', '1207', '1208', '1209', '1210', '1211', '1212', '1213', '1214', '1215', '1216', '1217', '1218', '1219', '1220', '1221', '1222', '1223', '1224', '1225', '1226'];
const cat13Images = ['1301', '1302', '1303', '1304', '1305', '1306', '1307', '1308', '1309', '1310', '1311', '1312', '1313', '1314', '1315', '1316', '1317', '1318', '1319', '1320', '1321', '1322', '1323', '1324', '1325', '1326'];
const cat14Images = ['1401', '1402', '1403', '1404', '1405', '1406', '1407', '1408', '1409', '1410', '1411', '1412', '1413', '1414', '1415', '1416', '1417', '1418', '1419', '1420', '1421', '1422', '1423', '1424', '1425', '1426', '1427'];
const cat21Images = ['2101', '2102', '2103', '2104', '2105', '2106', '2107', '2108', '2109', '2110', '2111', '2112', '2113', '2114', '2115', '2116', '2117', '2118', '2119', '2120', '2121', '2122', '2123', '2124', '2125'];
const cat22Images = ['2201', '2202', '2203', '2204', '2205', '2206', '2207', '2208', '2209', '2210', '2211', '2212', '2213', '2214', '2215', '2216', '2217', '2218', '2219', '2220', '2221', '2222', '2223', '2224', '2225', '2226'];
const cat23Images = ['2301', '2302', '2303', '2304', '2305', '2306', '2307', '2308', '2309', '2310', '2311', '2312', '2313', '2314', '2315', '2316', '2317', '2318', '2319', '2320', '2321', '2322', '2323', '2324', '2325'];
const cat24Images = ['2401', '2402', '2403', '2404', '2405', '2406', '2407', '2408', '2409', '2410', '2411', '2412', '2413', '2414', '2415', '2416', '2417', '2418', '2419', '2420', '2421', '2422', '2423', '2424'];
const cat31Images = ['3101', '3102', '3103', '3104', '3105', '3106', '3107', '3108', '3109', '3110', '3111', '3112', '3113', '3114', '3115', '3116', '3117', '3118', '3119', '3120', '3121', '3122', '3123', '3124', '3125', '3126'];
const cat32Images = ['3201', '3202', '3203', '3204', '3205', '3206', '3207', '3208', '3209', '3210', '3211', '3212', '3213', '3214', '3215', '3216', '3217', '3218', '3219', '3220', '3221', '3222', '3223', '3224', '3225'];
const cat33Images = ['3301', '3302', '3303', '3304', '3305', '3306', '3307', '3308', '3309', '3310', '3311', '3312', '3313', '3314', '3315', '3316', '3317', '3318', '3319', '3320', '3321', '3322', '3323', '3324', '3325', '3326'];
const cat34Images = ['3401', '3402', '3403', '3404', '3405', '3406', '3407', '3408', '3409', '3410', '3411', '3412', '3413', '3414', '3415', '3416', '3417', '3418', '3419', '3420', '3421', '3422', '3423', '3424', '3425', '3426'];
const cat41Images = ['4101', '4102', '4103', '4104', '4105', '4106', '4107', '4108', '4109', '4110', '4111', '4112', '4113', '4114', '4115', '4116', '4117', '4118', '4119', '4120', '4121', '4122', '4123', '4124', '4125', '4126'];
const cat42Images = ['4201', '4202', '4203', '4204', '4205', '4206', '4207', '4208', '4209', '4210', '4211', '4212', '4213', '4214', '4215', '4216', '4217', '4218', '4219', '4220', '4221', '4222', '4223', '4224', '4225', '4226', '4227'];
const cat43Images = ['4301', '4302', '4303', '4304', '4305', '4306', '4307', '4308', '4309', '4310', '4311', '4312', '4313', '4314', '4315', '4316', '4317', '4318', '4319', '4320', '4321', '4322', '4323', '4324', '4325', '4326'];
const cat44Images = ['4401', '4402', '4403', '4404', '4405', '4406', '4407', '4408', '4409', '4410', '4411', '4412', '4413', '4414', '4415', '4416', '4417', '4418', '4419', '4420', '4421', '4422', '4423', '4424', '4425', '4426'];
const cat51Images = ['5101', '5102', '5103', '5104', '5105', '5106', '5107', '5108', '5109', '5110', '5111', '5112', '5113', '5114', '5115', '5116', '5117', '5118', '5119', '5120', '5121', '5122', '5123', '5124', '5125', '5126'];
const cat52Images = ['5201', '5202', '5203', '5204', '5205', '5206', '5207', '5208', '5209', '5210', '5211', '5212', '5213', '5214', '5215', '5216', '5217', '5218', '5219', '5220', '5221', '5222', '5223', '5224', '5225'];
const cat53Images = ['5301', '5302', '5303', '5304', '5305', '5306', '5307', '5308', '5309', '5310', '5311', '5312', '5313', '5314', '5315', '5316', '5317', '5318', '5319', '5320', '5321', '5322', '5323', '5324', '5325', '5326'];
const cat54Images = ['5401', '5402', '5403', '5404', '5405', '5406', '5407', '5408', '5409', '5410', '5411', '5412', '5413', '5414', '5415', '5416', '5417', '5418', '5419', '5420', '5421', '5422', '5423', '5424', '5425'];

const normal_cat01Images = ['0101', '0102', '0103', '0104', '0105', '0106', '0108', '0109', '0110', '0113', '0115', '0118', '0121'];
const normal_cat02Images = ['0201', '0202', '0203', '0204', '0205', '0207', '0209', '0212', '0214', '0215', '0216', '0219', '0220', '0222', '0224', '0226'];
const normal_cat03Images = ['0301', '0302', '0303', '0304', '0305', '0307', '0309', '0310', '0311', '0313', '0316', '0317', '0319', '0320', '0321', '0324', '0326'];
const normal_cat04Images = ['0401', '0402', '0403', '0404', '0405', '0406', '0409', '0411', '0414', '0415', '0417', '0419', '0420', '0424', '0425'];
const normal_cat05Images = ['0501', '0502', '0503', '0504', '0505', '0507', '0509', '0511', '0512', '0514', '0516', '0517', '0521', '0522', '0524', '0525'];
const normal_cat06Images = ['0601', '0602', '0603', '0604', '0606', '0608', '0609', '0610', '0612', '0613', '0615', '0616', '0618', '0620', '0622', '0626'];
const normal_cat11Images = ['1101', '1102', '1103', '1104', '1107', '1108', '1109', '1111', '1113', '1114', '1116', '1119', '1123', '1124'];
const normal_cat12Images = ['1201', '1202', '1203', '1204', '1206', '1208', '1209', '1211', '1212', '1214', '1217', '1219', '1221', '1226'];
const normal_cat13Images = ['1301', '1302', '1303', '1305', '1306', '1308', '1310', '1311', '1312', '1313', '1315', '1316', '1321', '1324', '1325'];
const normal_cat14Images = ['1401', '1402', '1403', '1404', '1406', '1407', '1411', '1413', '1414', '1415', '1416', '1418', '1421', '1425', '1427'];
const normal_cat21Images = ['2101', '2102', '2103', '2105', '2106', '2109', '2111', '2112', '2114', '2116', '2119', '2120', '2121', '2122'];
const normal_cat22Images = ['2201', '2202', '2203', '2205', '2206', '2209', '2211', '2212', '2213', '2216', '2218', '2220', '2222', '2223', '2226'];
const normal_cat23Images = ['2301', '2302', '2303', '2305', '2306', '2308', '2309', '2311', '2312', '2313', '2321', '2322', '2324', '2325'];
const normal_cat24Images = ['2401', '2402', '2403', '2405', '2406', '2408', '2410', '2411', '2412', '2417', '2419', '2420', '2422', '2424'];
const normal_cat31Images = ['3101', '3102', '3103', '3105', '3107', '3108', '3109', '3111', '3113', '3114', '3119', '3120', '3121', '3125', '3126'];
const normal_cat32Images = ['3201', '3202', '3204', '3205', '3206', '3209', '3211', '3213', '3214', '3216', '3218', '3219', '3224', '3225'];
const normal_cat33Images = ['3301', '3302', '3304', '3305', '3307', '3308', '3310', '3311', '3313', '3314', '3319', '3320', '3325'];
const normal_cat34Images = ['3401', '3402', '3404', '3405', '3406', '3409', '3410', '3412', '3413', '3416', '3418', '3420', '3426'];
const normal_cat41Images = ['4101', '4102', '4103', '4104', '4106', '4108', '4109', '4110', '4112', '4115', '4118', '4119', '4120', '4122'];
const normal_cat42Images = ['4201', '4203', '4204', '4205', '4206', '4208', '4210', '4211', '4212', '4214', '4218', '4220', '4222', '4225', '4227'];
const normal_cat43Images = ['4301', '4303', '4304', '4305', '4307', '4308', '4310', '4312', '4313', '4314', '4316', '4320', '4321', '4322', '4326'];
const normal_cat44Images = ['4401', '4402', '4404', '4405', '4407', '4408', '4410', '4411', '4413', '4415', '4416', '4417', '4419', '4421', '4426'];
const normal_cat51Images = ['5101', '5102', '5104', '5105', '5106', '5107', '5109', '5110', '5112', '5114', '5117', '5120', '5121', '5122', '5126'];
const normal_cat52Images = ['5201', '5202', '5204', '5205', '5207', '5208', '5209', '5211', '5212', '5214', '5216', '5218', '5219', '5222', '5225'];
const normal_cat53Images = ['5301', '5302', '5303', '5304', '5305', '5307', '5309', '5310', '5312', '5314', '5318', '5319', '5321', '5324', '5326'];
const normal_cat54Images = ['5401', '5402', '5403', '5404', '5406', '5408', '5409', '5410', '5412', '5415', '5418', '5419', '5421', '5423'];

const hair_cat01Images = ['00101', '00102', '00103', '00104', '00105', '00106', '00107', '00108', '00109', '00110', '00111', '00112'];
const hair_cat02Images = ['00201', '00202', '00203', '00204', '00205', '00206', '00207', '00208'];
const hair_cat03Images = ['00301', '00302', '00303', '00304', '00305', '00306', '00307'];
const hair_cat04Images = ['00401', '00402', '00403', '00404', '00405', '00406', '00407', '00408'];
const hair_cat05Images = ['00501', '00502', '00503', '00504', '00505', '00506', '00507'];
const hair_cat06Images = ['00601', '00602', '00603', '00604', '00605', '00606', '00607', '00608'];
const hair_cat11Images = ['001101', '001102', '001103', '001104', '001105', '001106', '001107', '001108', '001109'];
const hair_cat12Images = ['001201', '001202', '001203', '001204', '001205', '001206', '001207', '001208', '001209'];
const hair_cat13Images = ['001301', '001302', '001303', '001304', '001305', '001306', '001307', '001308', '001309'];
const hair_cat14Images = ['001401', '001402', '001403', '001404', '001405', '001406', '001407', '001408', '001409'];
const hair_cat21Images = ['002101', '002102', '002103', '002104', '002105', '002106', '002107', '002108', '002109'];
const hair_cat22Images = ['002201', '002202', '002203', '002204', '002205', '002206', '002207', '002208', '002209'];
const hair_cat23Images = ['002301', '002302', '002303', '002304', '002305', '002306', '002307', '002308'];
const hair_cat24Images = ['002401', '002402', '002403', '002404', '002405', '002406', '002407', '002408'];
const hair_cat31Images = ['003101', '003102', '003103', '003104', '003105', '003106', '003107', '003108'];
const hair_cat32Images = ['003201', '003202', '003203', '003204', '003205', '003206', '003207', '003208', '003209'];
const hair_cat33Images = ['003301', '003302', '003303', '003304', '003305', '003306', '003307', '003308', '003309', '003310'];
const hair_cat34Images = ['003401', '003402', '003403', '003404', '003405', '003406', '003407', '003408', '003409'];
const hair_cat41Images = ['004101', '004102', '004103', '004104', '004105', '004106', '004107', '004108', '004109'];
const hair_cat42Images = ['004201', '004202', '004203', '004204', '004205', '004206', '004207', '004208', '004209'];
const hair_cat43Images = ['004301', '004302', '004303', '004304', '004305', '004306', '004307', '004308'];
const hair_cat44Images = ['004401', '004402', '004403', '004404', '004405', '004406', '004407', '004408'];
const hair_cat51Images = ['005101', '005102', '005103', '005104', '005105', '005106', '005107', '005108', '005109'];
const hair_cat52Images = ['005201', '005202', '005203', '005204', '005205', '005206', '005207', '005208'];
const hair_cat53Images = ['005301', '005302', '005303', '005304', '005305', '005306', '005307', '005308'];
const hair_cat54Images = ['005401', '005402', '005403', '005404', '005405', '005406', '005407', '005408', '005409'];


function createCategoryImages(categoryId, imageNames, folder = 'images') { 
  const container = document.getElementById(categoryId);
  imageNames.forEach(name => {
    const onSrc = `${folder}/${name}.png`;
    const offSrc = `${folder}/${name}_.png`;

    const img = document.createElement('img');
    img.src = offSrc;
    img.dataset.on = onSrc;
    img.dataset.off = offSrc;

    img.addEventListener('click', () => {
      const currentSrc = img.getAttribute('src'); 
      img.src = currentSrc.includes('_') ? img.dataset.on : img.dataset.off;
      saveChecklistState(); 
    });

    container.appendChild(img);
  });
}

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

createCategoryImages('normal_cat01', normal_cat01Images);
createCategoryImages('normal_cat02', normal_cat02Images);
createCategoryImages('normal_cat03', normal_cat03Images);
createCategoryImages('normal_cat04', normal_cat04Images);
createCategoryImages('normal_cat05', normal_cat05Images);
createCategoryImages('normal_cat06', normal_cat06Images);
createCategoryImages('normal_cat11', normal_cat11Images);
createCategoryImages('normal_cat12', normal_cat12Images);
createCategoryImages('normal_cat13', normal_cat13Images);
createCategoryImages('normal_cat14', normal_cat14Images);
createCategoryImages('normal_cat21', normal_cat21Images);
createCategoryImages('normal_cat22', normal_cat22Images);
createCategoryImages('normal_cat23', normal_cat23Images);
createCategoryImages('normal_cat24', normal_cat24Images);
createCategoryImages('normal_cat31', normal_cat31Images);
createCategoryImages('normal_cat32', normal_cat32Images);
createCategoryImages('normal_cat33', normal_cat33Images);
createCategoryImages('normal_cat34', normal_cat34Images);
createCategoryImages('normal_cat41', normal_cat41Images);
createCategoryImages('normal_cat42', normal_cat42Images);
createCategoryImages('normal_cat43', normal_cat43Images);
createCategoryImages('normal_cat44', normal_cat44Images);
createCategoryImages('normal_cat51', normal_cat51Images);
createCategoryImages('normal_cat52', normal_cat52Images);
createCategoryImages('normal_cat53', normal_cat53Images);
createCategoryImages('normal_cat54', normal_cat54Images);

createCategoryImages('hair_cat01', hair_cat01Images, 'hair');
createCategoryImages('hair_cat02', hair_cat02Images, 'hair');
createCategoryImages('hair_cat03', hair_cat03Images, 'hair');
createCategoryImages('hair_cat04', hair_cat04Images, 'hair');
createCategoryImages('hair_cat05', hair_cat05Images, 'hair');
createCategoryImages('hair_cat06', hair_cat06Images, 'hair');
createCategoryImages('hair_cat11', hair_cat11Images, 'hair');
createCategoryImages('hair_cat12', hair_cat12Images, 'hair');
createCategoryImages('hair_cat13', hair_cat13Images, 'hair');
createCategoryImages('hair_cat14', hair_cat14Images, 'hair');
createCategoryImages('hair_cat21', hair_cat21Images, 'hair');
createCategoryImages('hair_cat22', hair_cat22Images, 'hair');
createCategoryImages('hair_cat23', hair_cat23Images, 'hair');
createCategoryImages('hair_cat24', hair_cat24Images, 'hair');
createCategoryImages('hair_cat31', hair_cat31Images, 'hair');
createCategoryImages('hair_cat32', hair_cat32Images, 'hair');
createCategoryImages('hair_cat33', hair_cat33Images, 'hair');
createCategoryImages('hair_cat34', hair_cat34Images, 'hair');
createCategoryImages('hair_cat41', hair_cat41Images, 'hair');
createCategoryImages('hair_cat42', hair_cat42Images, 'hair');
createCategoryImages('hair_cat43', hair_cat43Images, 'hair');
createCategoryImages('hair_cat44', hair_cat44Images, 'hair');
createCategoryImages('hair_cat51', hair_cat51Images, 'hair');
createCategoryImages('hair_cat52', hair_cat52Images, 'hair');
createCategoryImages('hair_cat53', hair_cat53Images, 'hair');
createCategoryImages('hair_cat54', hair_cat54Images, 'hair');

document.getElementById('selectAllButton').addEventListener('click', () => {
  const allImages = document.querySelectorAll('.tab-content.active .image-grid img');
  allImages.forEach(img => {
    img.src = img.dataset.on;
  });
  saveChecklistState();
});

document.getElementById('resetButton').addEventListener('click', () => {
  const allImages = document.querySelectorAll('.tab-content.active .image-grid img');
  allImages.forEach(img => {
    img.src = img.dataset.off;
  });
  saveChecklistState();
});

document.getElementById("captureButton").addEventListener("click", function () {
  html2canvas(document.body).then((canvas) => {
    const link = document.createElement("a");
    link.download = "cardcheck.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  });
});


const hairMapping = {
  '0107': '00101', '0111': '00102', '0112': '00103', '0114': '00104', '0116': '00105', '0119': '00106', '0122': ['00108', '00109'], '0123': '00110', '0125': '00111',
'0206': '00201', '0208': '00202', '0210': '00203', '0211': '00204', '0213': '00205', '0218': '00206', '0221': '00207', '0225': '00208',
'0306': '00301', '0308': '00302', '0312': '00303', '0314': '00304', '0315': '00305', '0322': '00306', '0323': '00307',
'0407': '00401', '0408': '00402', '0410': '00403', '0412': '00404', '0413': '00405', '0416': '00406', '0421': '00407', '0422': '00408',
'0506': '00501', '0508': '00502', '0510': '00503', '0513': '00504', '0515': '00505', '0518': '00506', '0520': '00507',
'0605': '00601', '0607': '00602', '0611': '00603', '0614': '00604', '0617': '00605', '0621': '00606', '0623': '00607', '0625': '00608',
'1105': '001101', '1106': '001102', '1110': '001103', '1112': '001104', '1115': '001105', '1117': '001106', '1120': '001107', '1121': '001108', '1125': '001109',
'1205': '001201', '1207': '001202', '1210': '001203', '1213': '001204', '1216': '001205', '1220': '001206', '1222': '001207', '1224': '001208', '1225': '001209',
'1304': '001301', '1307': '001302', '1309': '001303', '1314': '001304', '1317': '001305', '1319': '001306', '1320': '001307', '1322': '001308', '1326': '001309',
'1405': '001401', '1408': '001402', '1409': '001403', '1410': '001404', '1412': '001405', '1417': '001406', '1420': '001407', '1422': '001408', '1426': '001409',
'2104': '002101', '2107': '002102', '2108': '002103', '2110': '002104', '2113': '002105', '2115': '002106', '2118': '002107', '2124': '002108', '2125': '002109',
'2204': '002201', '2207': '002202', '2208': '002203', '2210': '002204', '2214': '002205', '2215': '002206', '2219': '002207', '2221': '002208', '2225': '002209',
'2304': '002301', '2307': '002302', '2310': '002303', '2314': '002304', '2315': '002305', '2318': '002306', '2319': '002307', '2320': '002308',
'2404': '002401', '2407': '002402', '2409': '002403', '2413': '002404', '2414': '002405', '2415': '002406', '2418': '002407', '2421': '002408',
'3104': '003101', '3106': '003102', '3110': '003103', '3112': '003104', '3116': '003105', '3117': '003106', '3118': '003107', '3123': '003108',
'3203': '003201', '3207': '003202', '3208': '003203', '3210': '003204', '3212': '003205', '3217': '003206', '3220': '003207', '3222': '003208', '3223': '003209',
'3303': '003301', '3306': '003302', '3309': '003303', '3312': '003304', '3315': '003305', '3317': '003306', '3318': '003307', '3321': '003308', '3324': '003309', '3326': '003310',
'3403': '003401', '3407': '003402', '3408': '003403', '3411': '003404', '3417': '003405', '3419': '003406', '3423': '003407', '3424': '003408', '3425': '003409',
'4105': '004101', '4107': '004102', '4111': '004103', '4113': '004104', '4114': '004105', '4117': '004106', '4124': '004107', '4125': '004108', '4126': '004109',
'4202': '004201', '4207': '004202', '4209': '004203', '4213': '004204', '4217': '004205', '4219': '004206', '4221': '004207', '4224': '004208', '4226': '004209',
'4302': '004301', '4306': '004302', '4309': '004303', '4311': '004304', '4315': '004305', '4318': '004306', '4319': '004307', '4324': '004308',
'4403': '004401', '4406': '004402', '4409': '004403', '4412': '004404', '4414': '004405', '4420': '004406', '4424': '004407', '4425': '004408',
'5103': '005101', '5108': '005102', '5111': '005103', '5113': '005104', '5115': '005105', '5118': '005106', '5119': '005107', '5123': '005108', '5125': '005109',
'5203': '005201', '5206': '005202', '5210': '005203', '5213': '005204', '5217': '005205', '5220': '005206', '5221': '005207', '5223': '005208',
'5306': '005301', '5308': '005302', '5311': '005303', '5313': '005304', '5317': '005305', '5320': '005306', '5323': '005307', '5325': '005308',
'5405': '005401', '5407': '005402', '5411': '005403', '5413': '005404', '5414': '005405', '5417': '005406', '5420': '005407', '5424': '005408', '5425': '005409'
};


document.getElementById('importButton').addEventListener('click', () => {
  const checked4StarIds = [];
  const all4StarImages = document.querySelectorAll('#tab-4star .image-grid img');
  
  all4StarImages.forEach(img => {
    if (img.getAttribute('src') === img.dataset.on) {
      const imgId = img.dataset.on.split('/').pop().replace('.png', '');
      checked4StarIds.push(imgId);
    }
  });

  const normalImages = document.querySelectorAll('#tab-normal .image-grid img');
  normalImages.forEach(img => {
    const imgId = img.dataset.on.split('/').pop().replace('.png', '');
    if (checked4StarIds.includes(imgId)) {
      img.src = img.dataset.on;
    } else {
      img.src = img.dataset.off;
    }
  });

  const targetHairIds = checked4StarIds.flatMap(id => {
    const mapped = hairMapping[id];
    if (!mapped) return [];
    return Array.isArray(mapped) ? mapped : [mapped];
  });

  const hairImages = document.querySelectorAll('#tab-hair .image-grid img');
  hairImages.forEach(img => {
    const imgId = img.dataset.on.split('/').pop().replace('.png', '');
    if (targetHairIds.includes(imgId)) {
      img.src = img.dataset.on;
    } else {
      img.src = img.dataset.off;
    }
  });

  if (typeof saveChecklistState === 'function') {
    saveChecklistState();
  }
  alert("4성 탭의 체크 상태를 성공적으로 가져왔습니다!");
});


function saveChecklistState() {
  const checkedItems = [];
  document.querySelectorAll('.image-grid img').forEach(img => {
    if (img.getAttribute('src') === img.dataset.on) {
      checkedItems.push(img.dataset.on);
    }
  });
  localStorage.setItem('prekChecklist', JSON.stringify(checkedItems));
}

function loadChecklistState() {
  const savedData = localStorage.getItem('prskChecklist');
  if (savedData) {
    const checkedItems = JSON.parse(savedData);
    document.querySelectorAll('.image-grid img').forEach(img => {
      if (checkedItems.includes(img.dataset.on)) {
        img.src = img.dataset.on;
      } else {
        img.src = img.dataset.off;
      }
    });
  }
}


loadChecklistState();







