import { createAction } from '@reduxjs/toolkit';
import { AppRouteType } from '../types/app-types';

export const redirectToRoute = createAction<AppRouteType>('app/redirectToRoute');
