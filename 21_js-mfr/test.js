var total = document.getElementById("total");

var races = (d) => {

	var aznval = document.getElementById("asian");

	var filt = d.reduce(function (roll, school){
		if(school['asian_per'] > 20 && school["schoolyear"] == 20112012){
			return roll + 1;
		}else{
			return roll;
		}
	}, 0);

	aznval.innerHTML = 100 * filt / d.length;

	aznval = document.getElementById("asiannum");
	aznval.innerHTML = filt;

	var blkval = document.getElementById("black");

	filt = d.reduce(function (roll, school){
		if(school['black_per'] > 20 && school["schoolyear"] == 20112012){
			return roll + 1;
		}else{
			return roll;
		}
	}, 0);

	blkval.innerHTML = 100 * filt / d.length;

	blkval = document.getElementById("blacknum");
	blkval.innerHTML = filt;

	var hisval = document.getElementById("hispanic");

	filt = d.reduce(function (roll, school){
		if(school['hispanic_per'] > 20 && school["schoolyear"] == 20112012){
			return roll + 1;
		}else{
			return roll;
		}
	}, 0);

	hisval.innerHTML = 100 * filt / d.length;

	hisval = document.getElementById("hispanicnum");
	hisval.innerHTML = filt;

	var whival = document.getElementById("white");

	filt = d.reduce(function (roll, school){
		if(school['white_per'] > 20 && school["schoolyear"] == 20112012){
			return roll + 1;
		}else{
			return roll;
		}
	}, 0);

	whival.innerHTML = 100 * filt / d.length;

	whival = document.getElementById("whitenum");
	whival.innerHTML = filt;
}

const getthatjaysawn = async () => {
  const resp = await fetch('https://gist.githubusercontent.com/bnidevs/323922cffd64642d12ce25eaa6f40c5f/raw/e0077ac9488c17bebb44313c31d39c56ab18f395/sdemo.json');
  const jaysawn = await resp.json();
  races(jaysawn);
  total.innerHTML = jaysawn.length;
}

getthatjaysawn()