window.onload = function() {
    var conversationalForm = window.cf.ConversationalForm.startTheConversation({
      formEl: document.getElementById("form"),
      context: document.getElementById("cf-context"),
	   dictionaryData: {
	          "entry-not-found": "Wörterbuchschlüssel wird nicht gefunden.",
	          "input-placeholder": " ",
	          "input-placeholder-required": "Eingabe erforderlich ...",
	          "input-placeholder-error": "青年人，在想啥呢",
	          "input-placeholder-file-error": "Datei-Upload fehlgeschlagen ...",
	          "input-placeholder-file-size-error": "Dateigröße zu groß ...",
	          "input-no-filter": "Keine Ergebnisse für {input-value}",
	          "user-reponse-and": " & ",
	          "user-reponse-missing": "Fehlende Eingabe ...",
	          "general": "Allgemeiner Typ1|Allgemeiner Typ2"
	      },// empty will throw erro
		    robotImage:"./china.svg"
		      , 
			  userImage:"./qn.svg",
			  userInterfaceOptions:{
		  	            		controlElementsInAnimationDelay: 250,
		  	            		robot: {
		  	            			robotResponseTime: 0,
		  	            			chainedResponseTime: 500
		  	            		}
		  	            	},
      submitCallback: function() {
       conversationalForm.addRobotChatResponse("你已经完成啦");
       // conversationalForm.addRobotChatResponse("");
	   	
		setTimeout(function () {
		  window.ConversationalForm.remapTagsAndStartFrom(1);
		}, 2000);
				
      }
    });
  };  