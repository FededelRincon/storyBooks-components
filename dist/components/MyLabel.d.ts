/// <reference types="react" />
import './myLabel.css';
export interface MyLabelProps {
    /**
     * Este es el mensaje a mostrar en la etiqueta
     */
    label: string;
    /**
     * Este es el tamaño de la etiqueta
     */
    size: 'normal' | 'h1' | 'h2' | 'h3';
    /**
     * Si la palabra esta capitalizada o no
     */
    allCaps?: boolean;
    /**
     * Colores basicos del boton
     */
    color?: 'primary' | 'secondary' | 'tertiary';
    /**
     * Colores personalizado de la fuente
     */
    fontColor?: string;
}
export declare const MyLabel: ({ label, size, allCaps, color, fontColor }: MyLabelProps) => JSX.Element;
