package it.codecaster.cooperachela.dao;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import it.codecaster.cooperachela.bean.Cooperacion;

@Repository
public class CooperacionDAO {
	@Autowired
	OfyService ofyService; 
	
	public Cooperacion get(String id) {
		Cooperacion c =  ofyService.ofy().load().type(Cooperacion.class).id(id).now();
		if(c==null || c.abierto ==false) {
			return null;
		}
		return c;
	} 
	
	public boolean update (Cooperacion cooperacion) {
		ofyService.ofy().save().entities(cooperacion);
		return true;
	}
	
	public boolean save (Cooperacion cooperacion) {
		Cooperacion c = get(cooperacion.id);
		if(c!=null){
			return false;
		}
		
		ofyService.ofy().save().entities(cooperacion);
		return true;
		
		
	}
	
	public boolean cerrar(String id){
		Cooperacion c = get(id);
		if(c!=null){
			return false;
		}
		c.abierto = false;
		ofyService.ofy().save().entities(c);
		return true;
	}
}
