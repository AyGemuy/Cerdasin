import { annotate, annotationGroup } from 'https://unpkg.com/rough-notation?module';
      
      const n1 = document.querySelector('em');
      const n2 = document.querySelector('strong');
      const n3 = document.querySelector('h1');
      const n4 = document.querySelector('label');
      const n5 = document.querySelector('span');
      
      const a1 = annotate(n1, { type: 'underline', color: 'blue' });
      const a2 = annotate(n2, { type: 'circle', color: 'red', padding: 10 });
      const a3 = annotate(n3, { type: 'box', color: 'orange' });
      const a4 = annotate(n4, { type: 'underline', color: 'blue' });
      const a5 = annotate(n5, { type: 'box', color: 'orange' });
      
      const ag = annotationGroup([a1, a2, a3, a4, a5]);
      ag.show();
      
