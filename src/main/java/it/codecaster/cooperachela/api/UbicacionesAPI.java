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
import it.codecaster.cooperachela.bean.locaciones;
import it.codecaster.cooperachela.dao.CooperacionDAO;

@Controller
@RequestMapping("/u")
public class UbicacionesAPI {
	@Autowired
	CooperacionDAO cooperacionDAO;
	
	@RequestMapping( method = RequestMethod.GET)
	public @ResponseBody locaciones getLocacionesInJSON() {
		locaciones locaciones = new locaciones();
		locaciones.setLatitud("-24.11");
		locaciones.setLongitud("90.11");
		locaciones.setNombres("MODELORAMA");
		
		return locaciones;
	}
}