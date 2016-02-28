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
		 

		 Properties props = new Properties();
	        Session session = Session.getDefaultInstance(props, null);

	        String msgBody = "...";

	        try {
	            Message msg = new MimeMessage(session);
	            try {
					msg.setFrom(new InternetAddress("pedido@grupo.modelo.com", "Administrador "));
				} catch (UnsupportedEncodingException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
	            try {
					msg.addRecipient(Message.RecipientType.TO,
					                 new InternetAddress("lionheart815@hotmail.com", "Usuario X"));
				} catch (UnsupportedEncodingException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
	            msg.setSubject("Buen dia!, Proveedor, usted ha recibido un nuevo pedido.");
	            msg.setText(msgBody);
	            Transport.send(msg);

	        } catch (AddressException e) {
	            // ...
	        } catch (MessagingException e) {
	            // ...
	        }
	
		
	}

}
