import { Component } from 'solid-js';
import { getCurrentTeamSideAndRoundSwitch, IMatch, IMatchMap } from '../../../common';
import pencil from '../assets/icons/pencil.svg';
import { t } from '../utils/locale';
import { Card } from './Card';
import { CardMenu } from './CardMenu';

export const MatchMapCard: Component<{
	match: IMatch;
	map: IMatchMap;
	isCurrent: boolean;
}> = (props) => {
	const teamA = () => {
		if (!props.isCurrent || props.map.state === 'FINISHED') {
			return '';
		}
		return getCurrentTeamSideAndRoundSwitch(props.map).currentCtTeamAB === 'TEAM_A'
			? '(CT)'
			: '(T)';
	};
	const teamB = () => {
		switch (teamA()) {
			case '(CT)':
				return '(T)';
			case '(T)':
				return '(CT)';
			default:
				return '';
		}
	};
	return (
		<Card>
			<CardMenu
				entries={[
					[t('change map'), () => {}],
					[t('change state'), () => {}],
					[t('load this map'), () => {}],
				]}
			/>
			<h3 class="font-light text-base">
				{props.map.name}
				<img class="inline align-baseline ml-1" src={pencil} />
			</h3>
			<p class="space-x-5 flex basis-1/3 justify-center items-center">
				<span class="text-right flex-1">
					{teamA()} {props.match.teamA.name}
				</span>
				<span class="text-2xl text-center">
					{props.map.score.teamA}
					{' : '}
					{props.map.score.teamB}
				</span>
				<span class="text-left flex-1">
					{props.match.teamB.name} {teamB()}
				</span>
			</p>
			<p>
				<span>{t(props.map.state)}</span>
			</p>
		</Card>
	);
};
