package it.codecaster.cooperachela.bean;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.logging.Logger;

import com.googlecode.objectify.annotation.Entity;
import com.googlecode.objectify.annotation.Id;
import com.googlecode.objectify.annotation.Serialize;
@Entity
public class Cooperacion implements Serializable{
	/**
	 * 
	 */
	private static final long serialVersionUID = 8765957988460852953L;
	@Id
	public String id;
	@Serialize 
	public List<Miembro> miembros;
	@Serialize 
	public List<ProductoCooperacion> productos;
	
	private double total;
	private double meta;
	private String url;
	public boolean abierto = true;
	public Cooperacion() {
		miembros = new ArrayList<>();
		productos = new ArrayList<>();
	}
	
	public void setTotal() {
		
	}
	
	public void setMeta(double meta) {
		this.meta = meta;
	}
	
	public double getMeta() {
		meta = 0;
		for (ProductoCooperacion p : productos) {
			meta+= ((double)p.cantidad)*p.costo;
		}
		return meta;
	}
	
	public double getTotal() {
		total =0;
		for (Miembro miembro : miembros) {
			total+=miembro.aportacion;
		}
		return total;
	}	
	
	public void addMember(Miembro miembro) {
		boolean encontrado = false;
		if(miembros==null){
			miembros = new ArrayList<>();
		}
		for (Miembro m : miembros) {
			if(miembro.id.equals(m.id)){
				Logger.getLogger("Cooperacion").info("Agregando a miembro existente");
				m.aportacion+=miembro.aportacion;
				encontrado = true;
			}
		}
		if(!encontrado) {
			Logger.getLogger("Cooperacion").info("Agregando monto de miembro");
			miembros.add(miembro);
		}
	}
	
	public List<Miembro> getMiembros() {
		return miembros;
	}
	public void setMiembros(List<Miembro> miembros) {
		this.miembros = miembros;
	}
	public List<ProductoCooperacion> getProductos() {
		return productos;
	}
	public void setProductos(List<ProductoCooperacion> productos) {
		this.productos = productos;
	}
	
	public String getUrl() {
		return "http://cooperachela.appspot.com/api/c/"+id;
	}
	public void setUrl(String url) {
		this.url = url;
	}
}
