import React from 'react';
import QualificationCategory from './QualificationCategory';
import qualificationsData from './QualificationsData';

function QualificationsPage() {
  return (
    <main>
      {qualificationsData.map((section, index) => (
        <QualificationCategory
          key={index}
          category={section.category}
          items={section.items}
        />
      ))}
    </main>
  );
}

export default QualificationsPage;