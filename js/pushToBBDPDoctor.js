//�E������
//��QRCodeScannerHandler.js�I�s
function clinicPush(doctorID, patientID) {
	var message = "{\"doctorID\":\"" + doctorID + "\",\"patientID\":\"" + patientID + "\",\"option\":\"clinicPush\"}";		//�n�ǵ���ͪ��T��
	// change server path "140.121.197.130:8004" to path "140.121.196.23:3390"
	var websocket = new WebSocket('ws://140.121.196.23:3390/BBDPDoctor/PushServerEndpoint');
	websocket.onopen = function() {
		this.send(message);
		this.close();
	};
	websocket.onmessage = function(event) {
		this.close();
	};
	websocket.onerror = function() {};
	websocket.onclose = function(event) {};
}

//��������
//�ǰe������������ͺ�
//title: �f�w�m�W
//body: �f�w�m�W + ���ڪ��ˤ�g�ݨ��w��g���� or  �f�w�m�W + �ǰe�F�@���ɮ�
//hyperlink: �ɦW+get�Ѽ�
//type: questionnaire, folder, patientInstruction
function remindPush(doctorID, patientID, title, body, hyperlink, type) {
	var message = "{\"doctorID\":\"" + doctorID + "\",\"patientID\":\"" + patientID + "\",\"option\":\"remindPush\",\"title\":\"" + title + "\",\"body\":\"" + body + "\",\"hyperlink\":\"" + hyperlink + "\",\"type\":\"" + type + "\"}";		//�n�ǵ���ͪ��T��
	// change server path "140.121.197.130:8004" to path "140.121.196.23:3390"
	var websocket = new WebSocket('ws://140.121.196.23:3390/BBDPDoctor/PushServerEndpoint');
	websocket.onopen = function() {
		this.send(message);
		this.close();
	};
	websocket.onmessage = function(event) {
		this.close();
	};
	websocket.onerror = function() {};
	websocket.onclose = function(event) {};
	
	$.ajax({
		type: "POST",
		//url: "http://140.121.197.130:8004/BBDPDoctor/NotificationServlet",		//�S��!�OBBDPDoctor
		url: "http://140.121.196.23:3390/BBDPDoctor/NotificationServlet",
		data: {
			option: "newRemindPush",
			message: message
		},
		dataType: "text",
		success: function(response) {
			
		},
		error: function() {
			console.log("remindPushHandler.js newRemindPush error");
		}
	});
}