package it.codecaster.cooperachela.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
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
	
	@RequestMapping(method=RequestMethod.GET)
	public ModelAndView get() {
		ModelAndView model = new ModelAndView("cooperaciones");
		
		return model;
	}
	
	@RequestMapping(method=RequestMethod.POST)
	public @ResponseBody Respuesta add(@RequestBody Cooperacion cooperacion) {
		cooperacionDAO.save(cooperacion);
		return new Respuesta(200,"OK");
	}
	
}