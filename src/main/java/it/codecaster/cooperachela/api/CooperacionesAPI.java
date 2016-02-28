package it.codecaster.cooperachela.api;

import java.util.logging.Logger;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import it.codecaster.cooperachela.bean.Cooperacion;
import it.codecaster.cooperachela.bean.Miembro;
import it.codecaster.cooperachela.bean.Respuesta;
import it.codecaster.cooperachela.dao.CooperacionDAO;

@Controller
@RequestMapping("/c")
public class CooperacionesAPI {

	@Autowired
	CooperacionDAO cooperacionDAO;
	
	@RequestMapping(value="/{id}",method=RequestMethod.GET)
	public ModelAndView get(@PathVariable String id) {
		ModelAndView model = new ModelAndView("cooperacion");
		Cooperacion c = cooperacionDAO.get(id);
		if(c!=null){ 
			model.addObject("nombre",id);
			model.addObject("total",c.getTotal());
			model.addObject("meta",c.getMeta());			
			model.addObject("error",false);	
			return model;
		}else {
			model.addObject("error",true);	
			return model;
		}
	}
	@RequestMapping(value="/{id}/{nombre}/{idusuario}/{type}/payment",method=RequestMethod.POST)
	public ModelAndView processPayment(@PathVariable String id,
			@PathVariable String nombre,
			@PathVariable String idusuario,
			@PathVariable String type,			
			@RequestParam String mc_gross,@RequestParam String txn_id ) {
		ModelAndView model = new ModelAndView("cooperacion");
		boolean response = cooperacionDAO.get(id)!=null;
		
		//TODO: Validacion TXN
		
		Cooperacion c = cooperacionDAO.get(id);
		
		c.addMember(new Miembro(idusuario,nombre,Double.parseDouble(mc_gross),type));
		Logger.getLogger("CooperacionesAPI").info("Guardando miembro");		
		cooperacionDAO.update(c);
		
		if(response){ 
			model.addObject("nombre",id);
			model.addObject("error",false);			
			return model;
		}else {
			model.addObject("error",true);	
			return model;
		}
		
	}
	
	@RequestMapping(value="/payment",method=RequestMethod.GET)
	public ModelAndView processSimplePayment(@PathVariable String custom,
			@RequestParam String st,@RequestParam String tx ) {
		ModelAndView model = new ModelAndView("cooperacion");
		boolean response = cooperacionDAO.get(custom)!=null;
		if(response){ 
			model.addObject("nombre",custom);
			model.addObject("error",false);
			model.addObject("tx",tx);
			return model;
		}else {
			model.addObject("error",true);	
			return model;
		}
	}
	
	
	@RequestMapping(value="/json/{id}",method=RequestMethod.GET)
	public @ResponseBody Cooperacion getJSON(@PathVariable String id) {
		return cooperacionDAO.get(id);
	}
	
	@RequestMapping(method=RequestMethod.GET)
	public ModelAndView get() {
		ModelAndView model = new ModelAndView("cooperacion");
		model.addObject("error",true);	
		return model;
	}
	
	@RequestMapping(method=RequestMethod.POST)
	public @ResponseBody Respuesta add(@RequestBody Cooperacion cooperacion) {
		boolean response = cooperacionDAO.save(cooperacion);
		if(response) 
			return new Respuesta(200,"OK");
		else 
			return new Respuesta(404,"OK");	
	}
	
}