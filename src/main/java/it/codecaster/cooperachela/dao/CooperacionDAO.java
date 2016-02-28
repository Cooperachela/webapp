package it.codecaster.cooperachela.dao;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import it.codecaster.cooperachela.bean.Cooperacion;

@Repository
public class CooperacionDAO {
	@Autowired
	OfyService ofyService; 
	
	public Cooperacion get(String id) {
		return ofyService.ofy().load().type(Cooperacion.class).id(id).now();
	} 
	
	public boolean save (Cooperacion cooperacion) {
		Cooperacion c = get(cooperacion.id);
		if(c!=null){
			return false;
		}
		
		ofyService.ofy().save().entities(cooperacion);
		return true;
		
		
	}
}
