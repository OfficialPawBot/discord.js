import type { ReactNode } from 'react';
import { HyperlinkedText } from './HyperlinkedText';
import type { TokenDocumentation } from '~/util/parse.server';

export enum CodeListingSeparatorType {
	Type = ':',
	Value = '=',
}

export interface CodeListingProps {
	name: string;
	summary?: string | null;
	typeTokens: TokenDocumentation[];
	separator?: CodeListingSeparatorType;
	children?: ReactNode;
	className?: string | undefined;
}

export function CodeListing({
	name,
	className,
	separator = CodeListingSeparatorType.Type,
	summary,
	typeTokens,
	children,
}: CodeListingProps) {
	return (
		<div className={className}>
			<div key={name} className="flex flex-col">
				<div className="w-full flex flex-row gap-3">
					<h4 className="font-mono m-0">{`${name}`}</h4>
					<h4 className="m-0">{separator}</h4>
					<h4 className="font-mono m-0 break-all">
						<HyperlinkedText tokens={typeTokens} />
					</h4>
				</div>
				{summary && <p className="text-dark-100 dark:text-gray-300">{summary}</p>}
				{children}
			</div>
		</div>
	);
}
