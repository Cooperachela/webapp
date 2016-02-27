package it.codecaster.cooperachela.dao;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import it.codecaster.cooperachela.bean.Cooperacion;

@Repository
public class CooperacionDAO {
	@Autowired
	OfyService ofyService;
	
	public Cooperacion get(String id) {
		return ofyService.ofy().load().type(Cooperacion.class).filterKey(id).first().now();
	} 
	
	public void save (Cooperacion cooperacion) {
		ofyService.ofy().save().entities(cooperacion);
	}
}
