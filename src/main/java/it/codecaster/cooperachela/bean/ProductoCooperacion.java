package it.codecaster.cooperachela.bean;

import java.io.Serializable;

import com.googlecode.objectify.annotation.Entity;


public class ProductoCooperacion implements Serializable {
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	public String nombre;
	public int cantidad;
	public double costo;
}
