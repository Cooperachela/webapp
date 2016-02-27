package it.codecaster.cooperachela.bean;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import com.googlecode.objectify.Key;
import com.googlecode.objectify.annotation.Entity;
import com.googlecode.objectify.annotation.Id;
import com.googlecode.objectify.annotation.Index;
@Entity
public class Cooperacion implements Serializable{
	/**
	 * 
	 */
	private static final long serialVersionUID = 8765957988460852953L;
	@Id
	public String id;
	public List<String> miembros = new ArrayList<>();	
	public List<ProductoCooperacion> productos = new ArrayList<>();
	
	private double total;
	
	
	public void setTotal() {
		
	}
	public double getTotal() {
		total = 0;
		for (ProductoCooperacion p : productos) {
			total+= ((double)p.cantidad)*p.costo;
		}
		return total;
	}
}
