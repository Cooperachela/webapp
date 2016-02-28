package it.codecaster.cooperachela.bean;

import java.io.Serializable;

import com.googlecode.objectify.annotation.Entity;

public class Miembro implements Serializable{
	
	
	
	/**
	 * 
	 */
	private static final long serialVersionUID = -2623790999184146199L;
	public String id;
	public String nombre;	
	public double aportacion;
	public String type;
	public Miembro(String id, String nombre, double aportacion, String type) {
		super();
		this.id = id;
		this.nombre = nombre;
		this.aportacion = aportacion;
		this.type = type;
	}
	
    public Miembro() {
		
	}
	
}
