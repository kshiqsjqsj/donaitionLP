// JavaScript Document
window.onload=function(){
//ここから
	
//じゃんけんゲーム	
	
	//グーをクリック
document.querySelector("#gu_btn").onclick = function(){
	var num = Math.floor(Math.random() * 3 + 1);
	if(num===1){
		document.querySelector("#pc").innerHTML = "グー";
		document.querySelector("#num").innerHTML = "あいこ";
	}
	if(num===2){
		document.querySelector("#pc").innerHTML = "チョキ";
		document.querySelector("#num").innerHTML = "あなたの勝ちです";
	}
	if(num===3){
		document.querySelector("#pc").innerHTML = "パー";
		document.querySelector("#num").innerHTML = "あなたの負けです";
	}
	
	
};

//チョキをクリック
document.querySelector("#cho_btn").onclick = function(){
	var num = Math.floor(Math.random() * 3 + 1);
	if(num===1){
		document.querySelector("#pc").innerHTML = "グー";
		document.querySelector("#num").innerHTML = "あなたの負けです";
	}
	if(num===2){
		document.querySelector("#pc").innerHTML = "チョキ";
		document.querySelector("#num").innerHTML = "あいこ";
	}
	if(num===3){
		document.querySelector("#pc").innerHTML = "パー";
		document.querySelector("#num").innerHTML = "あなたの勝ちです";
	}
	
	
};


//パーをクリック
document.querySelector("#par_btn").onclick = function(){
	var num = Math.floor(Math.random() * 3 + 1);
	if(num===1){
		document.querySelector("#pc").innerHTML = "グー";
		document.querySelector("#num").innerHTML = "あなたの勝ちです";
	}
	if(num===2){
		document.querySelector("#pc").innerHTML = "チョキ";
		document.querySelector("#num").innerHTML = "あなたの負けです";
	}
	if(num===3){
		document.querySelector("#pc").innerHTML = "パー";
		document.querySelector("#num").innerHTML = "あいこ";
	}
};
	


	
 var drawActive = false;
            var offsetY   = 0; // iPadなどは15＋すると良いかも
            var posX  = 0;
            var posY  = 0;
			var strokeWidth = 1;
            var color = "#000"; // ラインの色をここで指定

			function initCanvas ($el) {
				return $el.getContext("2d")
			}
			var can = document.getElementById("drowarea")
			var ctx = initCanvas(can)

			function activateDraw () {
                drawActive = true;
            }

			function setPos (x, y) {
				posX = x
				posY = y
			}
            can.addEventListener("mousedown", function(e){
				setPos(e.offsetX, e.offsetY - offsetY)		
			    activateDraw()
            });

			function draw (e){
                if(!drawActive) return
	
				var deltaX = e.offsetX;	       //マウス位置（横
				var deltaY = e.offsetY - offsetY;  //マウス位置（縦

				ctx.strokeStyle = color;
				ctx.lineWidth = strokeWidth;
				ctx.beginPath();       //初期化され始点は座標(0,0)
				ctx.moveTo(posX, posY);//開始の座標
				ctx.lineTo(deltaX, deltaY);    //終点の座標
				ctx.stroke();          //線を引く
				ctx.closePath();       //完了

				setPos(deltaX, deltaY)
            }
            can.addEventListener("mousemove", draw);

			function diactivateDraw () {
                drawActive = false;
            }
            can.addEventListener("mouseup", diactivateDraw);
            can.addEventListener("mouseout", diactivateDraw);

			var $colorInput = document.getElementById("colors")
			function updateColor () {
               color = $colorInput.value;
            }
			$colorInput.addEventListener('change', updateColor);

			var $strokeWidthChanger = document.getElementById('strokrange')
			function updateStrokeWidth () {
               strokeWidth = parseInt($strokeWidthChanger.value);
            }
			$strokeWidthChanger.addEventListener('change', updateStrokeWidth)

			function cleanCanvas () {
                ctx.clearRect(0, 0, can.width, can.height); //0,0→width,heightの領域を消す
            }
			document.getElementById('clear_btn').addEventListener('click', cleanCanvas)

	
		//SAVE
		var save = document.querySelector("#save");
			
			//clear
		var claer = document.querySelector("#clear");
			
			//出力
		var send = document.querySelector("#memo_send");
			
			//save,clear,sendボタンクリックイベント
		save.addEventListener("click", saveAction, false);
		claer.addEventListener("click",claerAction, false);
		send.addEventListener("click",sendAction, false);	
			
			//保存
			function saveAction(){
				var write_value = document.querySelector("#text_write").value;
				var selectSave = document.querySelector("#memo_serect").value;
				localStorage.setItem(selectSave, write_value);
				alert("SAVEしました");
			}
			
			//send
			function sendAction(){
				var memo_value = document.querySelector("#memo_serect").value;
				var get = localStorage.getItem(memo_value);
				document.querySelector("#text_write").value = get;
				
			}
		
			//clear
			function claerAction(){
				localStorage.removeItem("memos");
				document.querySelector("#text_write").value = "";
				alert("CLAERしました");
			}
			
			//リロード
			if(localStorage.getItem("memos")){
				var value = localStorage.getItem("memos");
				document.querySelector("#text_write").value = value;
			}


	};