export interface Dispositivo {
  tipo: string,
  marca: string,
  modelo: string,
  num_serie: string,
  asset_name: string,
  mac_address: string,
  ip_address: string,
  owner: string,
  ubicacion: string,
  proceso: string,
  fecha_compra: string,
  garantia_inicio: string,
  garantia_fin: string,
  active: boolean,
  ultimo_check: string,
  diferencia?: string;
}
