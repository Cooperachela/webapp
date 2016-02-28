package it.codecaster.cooperachela.utils;

import java.io.UnsupportedEncodingException;
import java.util.Properties;

import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.AddressException;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;

public class sendMail {
	
	public sendMail(){
		
	}
	
	public void envio(){
		 
		String host = "smtp.google.com";
		 Properties props = new Properties();
		 props.put("mail.host", host);
			props.put("mail.transport.protocol", "smtp");
	        Session session = Session.getDefaultInstance(props, null);

	        String msgBody = "Un usuario ha solicitado un pedido!.";

	        try {
	            Message msg = new MimeMessage(session);
	            try {
					msg.setFrom(new InternetAddress("noreply@cooperachela.appspotmail.com", "Grupo Modelo "));
				} catch (UnsupportedEncodingException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
	            try {
					msg.addRecipient(Message.RecipientType.TO,
					                 new InternetAddress("danyel.nerv@gmail.com", "Usuario X"));
				} catch (UnsupportedEncodingException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
	            msg.setSubject("Buen dia!, Proveedor, usted ha recibido un nuevo pedido!!");
	            msg.setText(msgBody);
	            Transport.send(msg);

	        } catch (AddressException e) {
	        	e.printStackTrace();
	        } catch (MessagingException e) {
	        	e.printStackTrace();
	        }
	
		
	}

}
