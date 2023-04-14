/* tslint:disable:max-line-length */
import { FuseNavigationItem } from '@fuse/components/navigation';

export const defaultNavigation: FuseNavigationItem[] = [
    {
        id   : 'agents',
        title: 'Agents',
        type : 'basic',
        icon : 'feather:users',
        link : '/admin/agents'
    },{
        id   : 'leadManager',
        title: 'Lead Manager',
        type : 'basic',
        icon : 'heroicons_outline:office-building',
        link : '/lead-manager'
    },{
        id   : 'sites',
        title: 'Sites',
        type : 'basic',
        icon : 'heroicons_outline:office-building',
        link : '/admin/sites'
    }
];
export const compactNavigation: FuseNavigationItem[] = [
    {
        id   : 'discounts',
        title: 'Discounts',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/admin/example'
    }
];
export const futuristicNavigation: FuseNavigationItem[] = [
    {
        id   : 'eventCategories',
        title: 'Event Categories',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/admin/example'
    }
];
export const horizontalNavigation: FuseNavigationItem[] = [
    {
        id   : 'example',
        title: 'Example',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/admin/example'
    }
];
