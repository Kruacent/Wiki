import CHAOS_GLB from '../../static/models/CHAOS_INSURGENCY.glb';
import CLASSED_GLB from '../../static/models/CLASSE_D.glb'; 
import GUARD_GLB from '../../static/models/GARDE_DU_SITE.glb'
import HUMAN_GLB from '../../static/models/HUMAN.glb'
import MTF_GLB from '../../static/models/NINE_TAILED_FOX.glb';
import SCIENTIFIQUE_GLB from '../../static/models/SCIENTIFIQUE.glb';
import TUTORIAL_GLB from '../../static/models/TUTORIAL.glb';
import SCP106_GLB from '../../static/models/SCP-106.glb';
import SCP049_GLB from '../../static/models/SCP-049.glb';
import SCP939_GLB from '../../static/models/SCP-939.glb';

export const roleModelMap = {
  'CHAOS INSURGENCY': CHAOS_GLB,
  'CLASSE-D': CLASSED_GLB,
  'GARDE DU SITE': GUARD_GLB,
  'NINE-TAILED FOX': MTF_GLB,
  'SCIENTIFIQUE': SCIENTIFIQUE_GLB,
  'TUTORIAL': TUTORIAL_GLB,
  'CIVIL': HUMAN_GLB, 
  'SCP-106': SCP106_GLB,
  'SCP-049': SCP049_GLB,
  'SCP-939': SCP939_GLB
};

import { useGLTF } from '@react-three/drei';

export function preloadAllModels() {
    Object.values(roleModelMap).forEach(path => {
        useGLTF.preload(path);
    });
}