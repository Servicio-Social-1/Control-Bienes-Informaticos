import { Routes } from '@angular/router';
import { Inicio } from './inicio/inicio';
import { Registro } from './registro/registro';
import { DAPSIS } from './dap-sis/dap-sis';
import { IPyDirFisica } from './ipy-dir-fisica/ipy-dir-fisica';
import { EquiposSinIP } from './equipos-sin-ip/equipos-sin-ip';
import { IpDisponible } from './ip-disponible/ip-disponible';
import { Area } from './area/area';
import { AreaEspecifica } from './area-especifica/area-especifica';
import { Responsable } from './responsable/responsable';
import { ResponsableEspecifico } from './responsable-especifico/responsable-especifico';
import { Login } from './login/login';

export const routes: Routes = [
    {path: '', component: Login},
    {path: 'inicio', component: Inicio},
    {path: 'registro', component: Registro},
    {path: 'DAP-SIS', component: DAPSIS},
    {path: 'IPyDirFisica', component: IPyDirFisica},
    {path: 'equipos-sin-IP', component: EquiposSinIP},
    {path: 'IP-Disponible', component: IpDisponible},
    {path: 'area', component: Area},
    {path: 'area-Especifica', component: AreaEspecifica},
    {path: 'responsable', component: Responsable},
    {path: 'responsable-Especifico', component: ResponsableEspecifico},
];
