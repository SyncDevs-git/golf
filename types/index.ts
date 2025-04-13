export type NavItem = { 
    icon: string;
    title: string;
    to: string;
}; 

export type ColorDisplayMode = 'positive' | 'negative' | 'neutral';

export interface Video { 
    title: string;
    description: string;
    thumbnail: string;
    url: string;
} 

export interface CarouselItem { 
    title: string;
    thumbnail: string;
} 

export type PieChartHeader = { 
    title: string;
    valueField: string;
};
