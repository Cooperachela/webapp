package it.codecaster.cooperachela.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import it.codecaster.cooperachela.bean.Cooperacion;
import it.codecaster.cooperachela.dao.CooperacionDAO;

@RequestMapping("/w")
@Controller
public class ViewerAPI {
	@Autowired
	CooperacionDAO cooperacionDAO;
	
	@RequestMapping(value="/{id}")
	public ModelAndView get(@PathVariable String id) {
		ModelAndView model = new ModelAndView("cooperacionViewer");
		Cooperacion c = cooperacionDAO.get(id);
		if(c!=null){ 
			model.addObject("nombre",id);			
			model.addObject("meta",c.getMeta());			
			model.addObject("error",false);	
			return model;
		}else {
			model.addObject("error",true);	
			return model;
		}
	}
}
