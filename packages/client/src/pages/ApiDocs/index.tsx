import SwaggerUI from 'swagger-ui-react';
import 'swagger-ui-react/swagger-ui.css';
import { config } from '../../config';

(window as any).global = window;
// @ts-ignore
window.Buffer = window.Buffer || require('buffer').Buffer;

export default function ApiDocs() {
  return <SwaggerUI url={`${config.API_URL}/api-docs`} />;
}
