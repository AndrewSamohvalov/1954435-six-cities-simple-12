import { User } from '../../types/user';

type HostProps = {
  host: User;
  description: string;
};

export default function Host({host, description}:HostProps) {

  return (
    <div className="property__host" data-testid="host">
      <h2 className="property__host-title">Meet the host</h2>
      <div className="property__host-user user">
        <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
          <img className="property__avatar user__avatar" src={host.avatarUrl} width="74" height="74" alt="Host avatar"/>
        </div>
        <span className="property__user-name">
          {host.name}
        </span>
        {host.isPro && <span className="property__user-status">Pro</span>}
      </div>
      <div className="property__description">
        <p className="property__text">
          {description}
        </p>

      </div>
    </div>
  );
}
