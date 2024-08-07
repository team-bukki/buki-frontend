import React, { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import styled from 'styled-components';
import AnalysisHeader from './AnalysisHeader/AnalysisHeader';
import WeeklySummary from './WeeklySummary/WeeklySummary';
import CategoryRank from './CategoryRank/CategoryRank';
import EmotionRank from './EmotionRank/EmotionRank';
import CheeringMe from './CheeringMe/CheeringMe';
import CheeringTo from './CheeringTo/CheeringTo';
import 'swiper/css';

const AnalysisPage = styled.div`
  padding: 0 16px 80px 16px;
  background: rgb(255, 255, 255);
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(246, 246, 250, 1) 20%
  );
`;

function Analysis() {
  return (
    <ErrorBoundary fallback={<div>에러</div>}>
      <Suspense fallback={<div>로딩중..</div>}>
        <AnalysisPage>
          <AnalysisHeader />
          <WeeklySummary />
          <CategoryRank />
          <EmotionRank />
          <CheeringMe />
          <CheeringTo />
        </AnalysisPage>
      </Suspense>
    </ErrorBoundary>
  );
}

export default Analysis;
