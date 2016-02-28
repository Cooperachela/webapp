package it.codecaster.cooperachela.api;

import java.util.HashSet;
import java.util.Iterator;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.google.appengine.api.channel.ChannelMessage;
import com.google.appengine.api.channel.ChannelService;
import com.google.appengine.api.channel.ChannelServiceFactory;
import com.google.gson.Gson;

import it.codecaster.cooperachela.bean.Cooperacion;
import it.codecaster.cooperachela.bean.Respuesta;
import it.codecaster.cooperachela.dao.CooperacionDAO;

@Controller
@RequestMapping(value="/r")
public class RepartidorAPI {
	@Autowired
	CooperacionDAO cooperacionDAO;
	
	Set<String> connections = new HashSet<>(); 
	
	@RequestMapping(value="/register/{token}")
	public @ResponseBody Respuesta register(@PathVariable String token){
		ChannelService service = ChannelServiceFactory.getChannelService();
		connections.add(token);
		return new Respuesta(200,service.createChannel(token));
		
	}
	@RequestMapping(value="/push/{token}")
	public void push(@PathVariable String token){
		ChannelService service = ChannelServiceFactory.getChannelService();
		
		Cooperacion c = cooperacionDAO.get(token);
		for (Iterator<String> iterator = connections.iterator(); iterator.hasNext();) {
			String connection =  iterator.next();
			
			ChannelMessage message = new ChannelMessage(connection, new Gson().toJson(c));
			try {
				service.sendMessage(message);
			}catch(Exception e){
				connections.remove(connection);
			}
		}
						
	}
}
