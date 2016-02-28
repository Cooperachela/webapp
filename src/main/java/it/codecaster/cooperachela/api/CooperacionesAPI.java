package it.codecaster.cooperachela.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import it.codecaster.cooperachela.bean.Cooperacion;
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
		boolean response = cooperacionDAO.get(id)!=null;
		if(response){ 
			model.addObject("nombre",id);
			model.addObject("error",false);	
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