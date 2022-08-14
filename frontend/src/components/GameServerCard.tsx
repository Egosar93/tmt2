import { Component } from 'solid-js';
import { IMatchResponse } from '../../../common';
import { t } from '../utils/locale';
import { Card } from './Card';

export const GameServerCard: Component<{
	match: IMatchResponse;
}> = (props) => {
	const ipPort = () => `${props.match.gameServer.ip}:${props.match.gameServer.port}`;
	const steamUrl = () => `steam://connect/${ipPort()}/${props.match.serverPassword}`;
	return (
		<Card>
			<h2 class="font-bold text-lg">{t('Game Server')}</h2>
			<p>
				<a href={steamUrl()}>{steamUrl()}</a>
				<br />
				sv_password "{props.match.serverPassword}"; connect {ipPort()};
			</p>
		</Card>
	);
};