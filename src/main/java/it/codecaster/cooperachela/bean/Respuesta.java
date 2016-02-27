package it.codecaster.cooperachela.bean;

import java.io.Serializable;

public class Respuesta implements Serializable{
	/**
	 * 
	 */
	private static final long serialVersionUID = -180976183899927095L;
	
	
	
	public Respuesta(int codigo, String respuesta) {
		super();
		this.codigo = codigo;
		this.respuesta = respuesta;
	}
	
	public Respuesta() {
		
	}
	public int codigo;
	public String respuesta;
}
